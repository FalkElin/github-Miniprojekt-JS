window.addEventListener("load", main);
// let todos = [];

function main() {
  loadTodos();
  getLocation();
  startClock();
  mainTodo();
  //mainCalendar();
}

/** Använder användarens namn och sparar till LS */
function saveTodosToLS() {
  const todosAsString = JSON.stringify(todos);
  localStorage.setItem("todos", todosAsString);
}

function loadTodos() {
  const todosAsString = localStorage.getItem('todos');
  todos = JSON.parse(todosAsString || '[]');
}
