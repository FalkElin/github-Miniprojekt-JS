window.addEventListener("load", main);
/**
 * User input is pushed to the todo list after submit
 * @param {Array} Todo list
 */
let todos = [];
function main() {
  loadTodos();
  getLocation();
  startClock();
  initTodo();
  initCalendar();
}
/**
 * Saves todos to local storage
 * @type {Array}
 */
function saveTodosToLS() {
  const todosAsString = JSON.stringify(todos);
  localStorage.setItem("todos", todosAsString);
}
/**
 * Fetches todos from local storage
 * @returns {Array}
 */
function loadTodos() {
  const todosAsString = localStorage.getItem("todos");
  todos = JSON.parse(todosAsString || "[]");
}

