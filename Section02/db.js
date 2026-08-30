// db.js — SQLite 연결과 테이블 준비
// Node 22+ 부터는 SQLite가 내장되어 있어서 별도 설치 없이 바로 쓸 수 있다.
const { DatabaseSync } = require('node:sqlite');
const path = require('node:path');

// 이 파일(todo.db)이 데이터베이스 전체. 서버를 껐다 켜도 데이터가 남는다.
const db = new DatabaseSync(path.join(__dirname, 'todo.db'));

// 테이블이 없으면 만든다. (이미 있으면 아무 일도 안 함)
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    title      TEXT    NOT NULL,
    done       INTEGER NOT NULL DEFAULT 0,
    created_at TEXT    NOT NULL DEFAULT (datetime('now', 'localtime'))
  )
`);

// 처음 실행이라 테이블이 비어 있으면, 화면 확인용 샘플 데이터 하나 넣어두기
const { count } = db.prepare('SELECT COUNT(*) AS count FROM todos').get();
if (count === 0) {
  db.prepare('INSERT INTO todos (title) VALUES (?)').run('첫 번째 할 일 — 이 항목은 DB에서 온 것!');
}

module.exports = db;
