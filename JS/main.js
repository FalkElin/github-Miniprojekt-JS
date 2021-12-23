window.addEventListener("load", main);

let todos = [];

function main() {
  loadTodos();
  getLocation();
  startClock();
  initTodo();
  initCalendar();
}

/** Saves todos to local storage */
function saveTodosToLS() {
  const todosAsString = JSON.stringify(todos);
  localStorage.setItem("todos", todosAsString);
}

function loadTodos() {
  const todosAsString = localStorage.getItem("todos");
  todos = JSON.parse(todosAsString || "[]");
}

