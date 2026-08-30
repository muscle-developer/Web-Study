// server.js — Express 서버 + API 라우트
const express = require('express');
const path = require('node:path');
const db = require('./db');

const app = express();
const PORT = 3000;

// 미들웨어: 요청 본문(body)에 담긴 JSON을 req.body로 파싱해준다
app.use(express.json());
// public 폴더의 파일들(index.html, app.js, style.css)을 그대로 서빙
app.use(express.static(path.join(__dirname, 'public')));

// ── API 라우트 ──────────────────────────────────────────

// [조회] GET /todos — 전체 목록 (완성된 예시)
app.get('/todos', (req, res) => {
  const todos = db.prepare('SELECT * FROM todos ORDER BY id DESC').all();
  res.json(todos);
});

// [추가] POST /todos — req.body.title을 받아 INSERT 하고,
//        만들어진 행을 201 상태코드와 함께 응답하기
app.post('/todos', (req, res) => {
  // 클라이언트가 body에 실어 보낸 title 꺼내기
  const title = req.body.title;
  // DB에 INSERT. ?자리에 title이 안전하게 끼워진다.
  const result = db.prepare('INSERT INTO todos (title) VALUES (?)').run(title);
  // 방금 만들어진 행을 다시 조회해서, (만들어졌음 - 201) 상태코드와 함께 응답
  const newTodo = db.prepare('SELECT * FROM todos WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(newTodo);
});

// [수정] PATCH /todos/:id — done 값을 토글(0 ↔ 1)하기
app.patch('/todos/:id', (req, res) => {
  // URL이 /todos/3 이면 req.prams.id에 '3'이 들어온다.
  const id = req.params.id;

  // done이 0이면 1로, 1이면 0으로. (1 - 0 = 1, 1 - 1 = 0 이라서 토글이 된다)
  db.prepare('UPDATE todos SET done = 1 - done WHERE id = ?').run(id);

  res.json({ ok : true});
});

// [삭제] DELETE /todos/:id — 해당 행 삭제하고 204 응답
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  db.prepare('DELETE FROM todos WHERE id = ?').run(id);
  res.json({ ok : true});
})

// ────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`서버 실행 중 → http://localhost:${PORT}`);
});
