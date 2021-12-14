window.addEventListener('load', main);

let todos = [];

const todosForDay = todos.filter((todo) => true);

function main() {
  addEventListeners();
  renderTodos();
}

function addEventListeners() {
  document.getElementById('todo-form').addEventListener('submit', addTodo);
}

function addTodo(event) {
  event.preventDefault();
  //const formData = new FormData(event.target);
  //const todo = Object.fromEntries(formData);
    //const myArray = Object.values(todos);
    //document.getElementById('todo-form').innerHTML = Object.values(todos);
    const form = event.target;
    const input = form.querySelector('input');
    if (input.value) {
      todos.push(input.value);
      input.value = "";
      console.log(todos);
    }
    renderTodos();
}

function renderTodos() {
  const ul = document.querySelector('ul');
  // Remove previous content
  ul.innerHTML = "";
  // Re-add todos to ul
  for (const todo of todos) {
    const li = createTodoElement(todo);
    ul.appendChild(li);
  }

}

function createTodoElement(todo) {
  const li = document.createElement('li');
  li.innerHTML = todo;
  li.id = todo;
  li.addEventListener('click', removeTodo);
  return li;
}

function removeTodo(event) {
  const todoToDelete = event.target.id;

  const updatedTodoList = [];
  for (const todo of todos) {
    if (todo !== todoToDelete) {
      updatedTodoList.push(todo);
    }
  }
  todos = updatedTodoList;
  renderTodos();
}

