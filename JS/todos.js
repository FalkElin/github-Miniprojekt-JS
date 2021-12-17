window.addEventListener("load", mainTodo);

const form = document.querySelector("#todoForm");
const input = document.querySelector("input");
const mains = document.querySelector(".main");
const ul = document.querySelector("#todoList");




function mainTodo() {
  addEventListeners();
  renderTodos();
  //renderCalendar();
}

/** Skapar li element */
function createLi(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = todo.name;
  const label = document.createElement("label");
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.onclick =  () => beginEdit(todo, li, editBtn);
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
 
  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}
/** Ändrar texten på edit till save */
function beginEdit(todo, li, button) {
  const span = li.firstElementChild;
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.name;
  li.removeChild(span);
  li.prepend(input);
  button.textContent = "save";
  button.onclick = () => saveEdit(todo, input);
}
/** Sparar ändringar till LS */
function saveEdit(todo, input) {
  todo.name = input.value;
  saveTodosToLS();
  renderTodos();
}
/** Lägger till todos i array */
function addTodo(event) {
  event.preventDefault();
  const todo = constructFormObject(event.target);
  if (input.value) {
    todos.push(todo);
    input.value = "";
    saveTodosToLS();
    renderTodos();
  }
}

function renderTodos() {
  const filteredTodos = todos.filter((todo) => true);
  const ul = document.querySelector("ul");
  // Tar bort tidigare tillagda todos
  ul.innerHTML = "";
  // Lägger tillbaka todos
  for (const todo of filteredTodos) {
    const li = createLi(todo);
    ul.appendChild(li);
  }
}

/** Lägger till event lyssnare */
function addEventListeners() {
  const form = document.querySelector("#todoForm");
  form.addEventListener("submit", addTodo);
}

/**
 * Retunerar ett js-objekt baserat på ett form element
 * @param {HTMLFormElement} formElement
 * @returns {Object}
 */
function constructFormObject(formElement) {
  const formData = new FormData(formElement);
  return Object.fromEntries(formData);
}
