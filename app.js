//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EVENTLISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS
function addTodo(event) {
  //PREVENTING FROM SUBMITTING
  event.preventDefault();

  //TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //CREATE NEW-TODO
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //CHECK MARK-BUTTON
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-button");
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  todoDiv.appendChild(completedButton);

  //DELETE-BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  //APPEND DIV TO LIST
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(items) {
  //GETTING ITEMS BY PARAMS
  const todos = items.target;

  //DELETE TODO
  const todo = items.parentElement;
  todo.remove()
}
