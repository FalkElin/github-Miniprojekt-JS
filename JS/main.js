window.addEventListener("load", main);

let todos = [];

function main() {
  loadTodos();
  getLocation();
  startClock();
  mainTodo();

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

/** Raderar bortagen todo från LS */
function removeTodoFromLS(index){
  const todoAsString = JSON.parse(localStorage.getItem("todos")) || [];
  todoAsString.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 
// function removeItem(event) {
//   if (event.target.classList.contains("removeBtn")) {
//       let li = event.target.parentElement;
//       let index = Array.prototype.indexOf.call(itemList.children, li);
//       removeLocalStorage(index);
//       itemList.removeChild(li);
//     }
//   }


