window.addEventListener("load", main);

let todos = [];
let dateOfTodos = [];
let todoBadge = [];

function main() {
  loadTodos();
  loadTodosInLS();
  getLocation();
  startClock();
  mainTodo();
}

function saveToLS(todoBadge) {
  localStorage.setItem("todoBadge", JSON.stringify(todoBadge));
}
/** Sparar todos till LS */
function saveTodosToLS() {
  const todosAsString = JSON.stringify(todos);
  localStorage.setItem("todos", todosAsString);
}

function loadTodos() {
  const todosAsString = localStorage.getItem("todos");
  todos = JSON.parse(todosAsString || "[]");
}

/** Raderar bortagen todo från LS */
function removeTodoFromLS(index) {
  const todoAsString = JSON.parse(localStorage.getItem("todos")) || [];
  localStorage.setItem("todos", JSON.stringify(todos));
  todoAsString.splice(index, -1);
}

// function saveCalendarToLS() {
//   const todoDateAsString = Date.parse('dateOfTodos');
//   localStorage.setItem('dateOfTodos', date);
//   dateOfTodos.unshift(date);
// }

function loadTodosInLS() {
  const todoDateAsString = localStorage.getItem("dateOfTodos");
  dateOfTodos = Date.parse(todoDateAsString || "[]");
}

// function saveCalendarToLS() {
//   dateOfTodos.unshift(date);
//   dateOfTodos.forEach(el => {
//     el.addEventListener('input', event => {
//       localStorage.setItem(el.date, el.value);
//     })
//   })
// }

// function saveTodosInCalendarToLS() {
//   const todosID = JSON.stringify(todoDate);
//   localStorage.setItem("todos", todosID);
// }

// function loadTodosInCalendar() {
//   const todosID = localStorage.getItem('todos');
//   todoDate = JSON.parse(todosID || '[]');
// }
//
// function removeItem(event) {
//   if (event.target.classList.contains("removeBtn")) {
//       let li = event.target.parentElement;
//       let index = Array.prototype.indexOf.call(itemList.children, li);
//       removeLocalStorage(index);
//       itemList.removeChild(li);
//     }
//   }
