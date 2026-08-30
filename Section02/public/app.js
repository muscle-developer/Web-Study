// app.js — 브라우저 쪽 코드. fetch로 서버 API를 호출한다 (Chapter 13~14에서 배운 것 그대로!)

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

// [조회] 서버에서 목록을 받아와 화면에 그리기 (완성된 예시)
async function loadTodos() {
  const response = await fetch('/todos');
  const todos = await response.json();

  list.innerHTML = '';
  for (const todo of todos) {
    const li = document.createElement('li');
    if (todo.done) li.classList.add('done');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = Boolean(todo.done);
    // TODO: [수정] 체크박스 클릭 시 PATCH /todos/:id 호출 후 loadTodos() 다시 실행
    checkbox.addEventListener('change', async () => {
      await fetch(`/todos/${todo.id}`, { method: 'PATCH' });
      loadTodos();
    })

    const span = document.createElement('span');
    span.textContent = todo.title;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    // TODO: [삭제] 버튼 클릭 시 DELETE /todos/:id 호출 후 loadTodos() 다시 실행
    deleteButton.addEventListener('click', async () => {
      await fetch(`/todos/${todo.id}`, { method: 'DELETE'});
      loadTodos();
    });

    li.append(checkbox, span, deleteButton);
    list.append(li);
  }
}

// [추가] 폼 제출 시 POST /todos 호출
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // 폼의 기본 동작(페이지 새로고침) 막기

  await fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ title: input.value}),
  });

  input.value = ''; // 입력창 비우기
  loadTodos();      // 서버에서 목록 다시 받아와 화면 갱신
});

// 페이지가 열리면 목록부터 불러온다
loadTodos();
