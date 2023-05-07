const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const COMPLETE_CLASSNAME = "complete";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDos();
}
function completeToDo(event, obj) {
  const li = event.target.parentElement;
  li.classList.toggle(COMPLETE_CLASSNAME);
  console.dir(li);

  if(li.classList.contains(COMPLETE_CLASSNAME)){
    obj.complete = true;
  } else {
    obj.complete = false;
  }
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const btnDel = document.createElement("button");
  btnDel.innerText = "❌";
  btnDel.addEventListener("click", deleteToDo);
  const btnCom = document.createElement("button");
  btnCom.innerText = "✅";
  btnCom.addEventListener("click", (event)=>completeToDo(event, newToDoObj));

  if(newToDoObj.complete === true) {
    li.classList.toggle(COMPLETE_CLASSNAME);
  }

  li.appendChild(span);
  li.appendChild(btnCom);
  li.appendChild(btnDel);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
    complete: false,
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}