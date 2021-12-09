let todos = ['Plugga', 'Tvätta', 'Köpa julklappar'];

titel, date, color i arrayen;
//colorPicker.addEventListener('input', updateFirst, false);
//colorPicker.addEventListener('change', watchColorPicker, false);

//function watchColorPicker(event) {
//  document.querySelectorAll('p').forEach(function(p) {
//    p.style.color = event.target.value;
//  });
//}

let color;
let defaultColor = "#0000ff";

function todo() {
  renderTodos();
  const form = document.querySelector("form");
  //form.addEventListener("submit", addTodo);
}

function assignColor() {
  color = document.querySelector("#color");
  color.value = defaultColor;
  //color.addEventListener("input", updateFirst, false);
  //color.addEventListener("change", updateAll, false);
}

function updateFirst(event) {
  let changeBackgroundColor = document.querySelector("#color");
  if (changeBackgroundColor) {
    changeBackgroundColor.style.backgroundColor = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("input").forEach(function (input) {
    input.style.color = event.target.value;
  });
}

function addTodo(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const todo = Object.fromEntries(formData);
  console.log(todo);

  //if (input.value) {
  todos.push(todo);
  // input.value = "";
  renderTodos();
}

function renderTodos() {
  const ul = document.querySelector("ul");
  // Tar bort tidigare tillagda todos
  ul.innerHTML = "";
  // Lägger till nya todos till listan
  for (const todo of todos) {
    const li = createTodoElement(todo);
    ul.appendChild(li);
  }
}

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.innerHTML = todo;
  li.id = todo;
  //li.addEventListener("click", removeTodo);
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
