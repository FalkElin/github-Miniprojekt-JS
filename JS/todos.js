window.addEventListener("load", mainTodo);

/** Global scope */
const form = document.querySelector("#todoForm");
const input = document.querySelector("input");
const mains = document.querySelector(".main");
const ul = document.querySelector("#todoList");
let todoParagraph;

function mainTodo() {
  addEventListeners();
  renderTodos();
}

/**
 * Create li element with a span, an edit button and delete button. 
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
  (removeBtn.onclick = () => deleteTodo(todo, li, deleteTodo, removeBtn)),
    renderCalendarHolidays(removeBtn);

  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}

/** Creates a new input field to edit the todo and changes the name of edit button to save. */
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


/** If a cell's text content containes the same as a todo's name and 'todo'. Remove the first child. /*
/** Remove a todo */
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
  todos.pop(todo);
  ul.removeChild(li);
  removeBtn.textContent = "Ta bort";
  (removeBtn.onclick = () => deleteTodo(todo, input, removeBtn)),
    renderTodosInCalendar(removeBtn);
  renderTodosInCalendar();
  removeTodoFromLS();
  saveTodosToLS();
  renderCalendar();
  renderCalendarHolidays();
}

/** Saves changes to local storage*/
function saveEdit(todo, input) {
  todo.name = input.value;
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
    saveCalendar();
    renderTodos(todo);
    renderCalendar();
  }
  // renderTodosInCalendar();
}

// function addDate(event) {
//   event.preventDefault();
//   const date = constructFormObject(event.target);
//   const dateInput = +form.getElementsById('date').value;
//   input.type = Number;
//   input.value = dateValue;

//   if (dateValue) {
//     dateOfTodos.unshift(date);
//     dateValue = "";
//     saveCalendarToLS();
//     renderCalendar();
//   }
// }
/**
 * Adds the todos from the todo list to the calendar
 */
function renderTodosInCalendar() {
  for (let todo of todos) {
    let todoDates = todo.date;
    let todoNames = todo.name;

    let splittedDates = todoDates.split("-");
    let todoDate = parseInt(splittedDates[2]);
    todoParagraph = document.createElement("p");
    todoParagraph.classList.add("todo");
    todoParagraph.textContent = todoNames;

    for (let i = 0; i < 42; i++) {
      if (todoDate == dateCells[i].textContent) {
        let todoCells = dateCells[i];
        todoCells.appendChild(todoParagraph);
      }
    }
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
