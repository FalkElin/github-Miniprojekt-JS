window.addEventListener("load", mainTodo);

const form = document.querySelector("#todoForm");
const input = document.querySelector("input");
const mains = document.querySelector(".main");
const ul = document.querySelector("#todoList");
let todoParagraph;

function mainTodo() {
  addEventListeners();
  renderTodos();
}
// let todos = []
/** Skapar li element */
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
  (removeBtn.onclick = () => deleteTodo(todo, li, deleteTodo, removeBtn)),
    renderCalendarHolidays(removeBtn);

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
  button.textContent = "Spara";
  button.onclick = () => saveEdit(todo, input);
}
/** Ta bort todo */
function deleteTodo(todo, li, removeBtn) {
  /** Om en cells innerhtml innehåller samma som en todos namn samt 'todo' = ta bort första barnet */
  for (let i = 0; i < 42; i++) {
    if (dateCells[i].innerHTML.includes(todo.name && "todo")) {
      let todoCell = dateCells[i];
      todoCell.firstElementChild.remove();
    }
  }
  const span = li.firstElementChild;
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.name;
  todos.pop(todo);
  ul.removeChild(li);
  removeBtn.textContent = "Ta bort";
  (removeBtn.onclick = () => deleteTodo(todo, input, removeBtn)),
    renderTodosInCalendar(removeBtn);
  renderTodosInCalendar();
  saveTodosToLS();
  renderCalendar();
  renderCalendarHolidays();
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
  console.log(todos);

  if (input.value) {
    todos.unshift(todo);
    input.value = "";
    saveTodosToLS();
    renderTodos();
    renderCalendar();
  }
  // renderTodosInCalendar();
}

function renderTodosInCalendar() {
  for (let todo of todos) {
    let todoDates = todo.date;
    let todoNames = todo.name;

    let splittedDates = todoDates.split("-");
    let todoDate = parseInt(splittedDates[2]);
    todoParagraph = document.createElement("p");
    todoParagraph.classList.add("todo");
    todoParagraph.innerHTML = todoNames;

    for (let i = 0; i < 42; i++) {
      if (todoDate == dateCells[i].innerHTML) {
        let todoCells = dateCells[i];
        todoCells.appendChild(todoParagraph);
      }
    }
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

/** Lägger till eventlyssnare */
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

/**----------------- */
