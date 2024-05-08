//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".todo-filter");

//EVENTLISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("click", todoFiltering);

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

function todoFiltering(e) {
  // GETTING TODOS AND CHILDNODES USING [TODOLIST] SELECTOR
  const getTodos = todoList.childNodes;
  //ITERATING THE EACH TODO TO FILTER OPTIONS
  getTodos.forEach(function (TODOS) {
    //TARGETED 3 FILTER OPTIONS HERE
    switch (e.target.value) {
      case "All":
        //DISPLAYING ALL ELEMENTS USING [todos]
        TODOS.style.display = "flex";
        break;
      //FILTERING CHECKED ELEMENTS BY USING IFELSE AND CLASSLIST
      case "Completed":
        if (TODOS.classList.contains("completed-todo")) {
          TODOS.style.display = "flex";
        } else {
          TODOS.style.display = "none";
        }
        break;
      case "InCompleted":
        if (!TODOS.classList.contains("completed-todo")) {
          TODOS.style.display = "flex";
        } else {
          TODOS.style.display = "none";
        }
        break;
      default:
        console.error("Invalid Filtering");
    }
  });
}
