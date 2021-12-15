window.addEventListener('load', mainTodo);

let todos = [];
const todosForDay = todos.filter((todo) => true);

function mainTodo() {
  renderTodos();
}

const form = document.querySelector('#todoForm');
const input = document.querySelector('input');
const mains = document.querySelector('.main');
const ul = document.querySelector('#todoList');


// Skapa li element
function createLi() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = input.value;
  const label = document.createElement('label');
  //label.textContent = 'submit';
  //const checkbox = document.createElement('input');
  //checkbox.type = 'checkbox';
  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';

  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
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

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const li = createLi();

  if(input.value === '') {
    alert('Enter a new todo');
  } else {
    ul.appendChild(li);
  }
}); 


//Ändra och radera todo
ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'remove') {
      ul.removeChild(li);
    } else if(button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if(button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});
