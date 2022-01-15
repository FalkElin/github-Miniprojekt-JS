/** Global scope */
const form = document.querySelector("#todoForm");
const input = document.querySelector("input");
const mains = document.querySelector(".main");
const ul = document.querySelector("#todoList");
let todoParagraph;

function initTodo() {
  addEventListeners();
  renderTodos();
}
/**
 * Creates li element with a span, an edit button and delete button.
 * @type {HTMLLIElement} li element
 */
function createLi(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = todo.name;
  const label = document.createElement("label");
  const editBtn = document.createElement("button");
  editBtn.textContent = "Ändra";
  editBtn.onclick = () => beginEdit(todo, li, editBtn);
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Ta bort";
  (removeBtn.onclick = () => deleteTodo(todo, li, deleteTodo, removeBtn))
  renderCalendarHolidays();

  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}
/**
 * Creates a new input field to edit the todo and changes the name of edit button to save.
 * @type {HTMLInputElement} todo input
 * @type {HTMLLIElement} li 
 * @type {HTMLButtonElement} button 
 */
function beginEdit(todo, li, button) {
  const span = li.firstElementChild;
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.name;
  li.removeChild(span);
  li.prepend(input);
  button.textContent = "Spara";
/**
 * Creates a date picker so you can change the date of the todo
 * @type {HTMLInputElement} date
 */
  const editDate = document.createElement("input");
  editDate.setAttribute("type", "date");
  editDate.setAttribute("name", "date");
  editDate.value = todo.date;
  li.appendChild(editDate);
  button.onclick = () => saveEdit(todo, input, editDate)
}

/**
 *  Remove a todo
 * If a cell's text content containes the same as a todo's name and 'todo'. Remove the first child.
 * @type {HTMLButtonElement} removeBtn 
 */
function deleteTodo(todo, li, removeBtn) {
  for (let i = 0; i < 42; i++) {
    if (dateCells[i].textContent.includes(todo.name && "todo")) {
      let todoCell = dateCells[i];
      todoCell.firstElementChild.remove();
    }
  }
  const span = li.firstElementChild;
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.name;
  const todoIndex = todos.indexOf(todo);
  todos.splice(todoIndex, 1);
  ul.removeChild(li);
  removeBtn.textContent = "Ta bort";
  (removeBtn.onclick = () => deleteTodo(todo, input, removeBtn));
  saveTodosToLS();
  renderCalendar();
  renderCalendarHolidays();
}
/**
 * Saves changes in the list
 * @type {HTMLButtonElement} todo 
 */
function saveEdit(todo, input, editDate) {
  todo.name = input.value;
  todo.date = editDate.value;
  saveTodosToLS();
  renderTodos();
}
/** Adds todos to the array */
function addTodo(event) {
  event.preventDefault();
  let todo = constructFormObject(event.target);

  if (input.value) {
    todos.unshift(todo);
    input.value = "";
    saveTodosToLS();
    renderTodos(todo);
    renderCalendar();
  }
}

/** Removes and adds all todos to the list when a new todo has been added. */
function renderTodos() {
  const ul = document.querySelector("ul");
  ul.textContent = "";
  // const filteredTodos = todos.filter((todo) => true);

  for (const todo of todos) {
    const li = createLi(todo);
    ul.appendChild(li);
  }
}

/** Adds eventlisteners to the submit button */
function addEventListeners() {
  const form = document.querySelector("#todoForm");
  form.addEventListener("submit", addTodo);
}

/**
 * Returns a javascript object based on a form element.
 * @param {HTMLFormElement} formElement
 * @returns {Object}
 */
function constructFormObject(formElement) {
  const formData = new FormData(formElement);
  return Object.fromEntries(formData);
} 
