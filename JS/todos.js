window.addEventListener('load', main);

const todos = ['Köpa julklappar', 'Handla', 'Träna'];

const todosForDay = todos.filter((todo) => true);

function main() {
  addEventListeners();
  renderTodos();
}

function addEventListeners() {
  document.getElementById('todo-form').addEventListener('submit', addTodo);
  const newTodo = document.querySelector('title');
  const newDate = document.querySelector('date');
}
// Listan funkar utan datum
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
      renderTodos();
    }
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
/* 
const todoObjectList = [];
let idIndex = 0;

class Todo_Class {
    constructor(item){
        this.ulElement =item;
    } 

    add() {
        const todoInput = document.querySelector("#myInput").value;
        if (todoInput == "") {
            alert("You did not enter any todo") 
        } else {
            const todoObject = {
                id : idIndex++,
                todoText : todoInput,
                
                isDone : false,
            }

        todoObjectList.unshift(todoObject);
        this.display();
        document.querySelector("#myInput").value = '';

        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item)=> item.id == x);
        console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
        this.display();
    }

    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item)=> item.id == z);

        todoObjectList.splice(selectedDelIndex,1);

        this.display();
    }


    display() {
        this.ulElement.innerHTML = "";

        todoObjectList.forEach((object_item) => {

            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");

            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "fa-trash-alt");

            liElement.appendChild(delBtn);
            
            delBtn.addEventListener("click", function(e) {
                const deleteId = e.target.getAttribute("data-id");
                myTodoList.deleteElement(deleteId);
            })
            
            liElement.addEventListener("click", function(e) {
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done_undone(selectedId);
            })

            if (object_item.isDone) {
                liElement.classList.add("checked");
            }

            this.ulElement.appendChild(liElement);
        })
    }
} 




//----MAIN PROGRAM------------
const listSection = document.querySelector("#myUL");

myTodoList = new Todo_Class(listSection);


document.querySelector(".addBtn").addEventListener("click", function() {
    myTodoList.add()
})

document.querySelector("#myInput").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        myTodoList.add()
    }
})
 */