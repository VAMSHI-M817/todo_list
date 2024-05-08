//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".todo-filter");

//EVENTLISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodo);

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

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    //ADDING ANIMATION
    todo.classList.add("fall-item");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  //TODOS CHECKED
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed-todo");
  }
}

debugger
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Completed":
        if (todo.classList === "complete-button") {
          todo.style.display = "flex";
          console.log(todo);
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
