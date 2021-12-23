window.addEventListener("load", main);

let todos = [];
let dateOfTodos = [];

function main() {
  loadTodos();
  loadTodosInLS();
  getLocation();
  startClock();
  mainTodo();
}

/** Saves todos to local storage */
function saveTodosToLS() {
  const todosAsString = JSON.stringify(todos);
  localStorage.setItem("todos", todosAsString);
}

function loadTodos() {
  const todosAsString = localStorage.getItem('todos');
  todos = JSON.parse(todosAsString || '[]');
}

/** Removes a todo from local storage */
function removeTodoFromLS(index){
  const todoAsString = JSON.parse(localStorage.getItem("todos")) || [];
  localStorage.setItem('todos', JSON.stringify(todos));
  todoAsString.splice(index, -1);
}


function saveCalendarToLS() {
  const todoDateAsString = localStorage.getItem('dateOfTodos');
  localStorage.setItem('dateOfTodos', todoDateAsString);
}

function loadTodosInLS() {
  const todoDateAsString = localStorage.getItem('dateOfTodos');
  dateOfTodos = JSON.parse(todoDateAsString || '[]');
}


