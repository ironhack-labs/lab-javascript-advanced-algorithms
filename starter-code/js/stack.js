var stack = new StackDataStructure();
var root = document.querySelector(".container");

function initStackTemplate() {
  var stackTemplate = document.createElement("div");
  stackTemplate.className = "wrapper";
  stackTemplate.innerHTML = "<h1>Stack</h1>";

  var elementInput = document.createElement("input");
  elementInput.setAttribute("type", "text");
  elementInput.placeholder = "Add element to the stack...";
  elementInput.className = "input";
  stackTemplate.appendChild(elementInput);

  var addBtn = document.createElement("button");
  addBtn.className = "btn btn-add";
  addBtn.innerHTML = "ADD";
  addBtn.onclick = addClick;
  stackTemplate.appendChild(addBtn);

  var takeBtn = document.createElement("button");
  takeBtn.className = "btn btn-take";
  takeBtn.innerHTML = "TAKE";
  takeBtn.onclick = takeClick;
  stackTemplate.appendChild(takeBtn);

  var elementsStack = document.createElement("div");
  elementsStack.className = "stack";

  var alertMessage = document.createElement("div");
  alertMessage.className = "alert";
  elementsStack.appendChild(alertMessage);

  for (var i = 0; i < stack.MAX_SIZE; i++) {
    var item = document.createElement("div");
    item.className = "item empty";
    elementsStack.appendChild(item);
  }
  stackTemplate.appendChild(elementsStack);

  root.appendChild(stackTemplate);
}

function addClick() {
  var element = document.querySelector(".input").value;

  if (element) {
    var result = stack.push(element);

    if (result === "Stack Overflow" || result === "Stack Underflow") {
      alertMessage(result);
    }
  } else {
      alertMessage("Input not valid!");
  }
  updateStack();
}

function takeClick() {
  var result = stack.pop();
  console.log("result", result);
  if (result === "Stack Overflow" || result === "Stack Underflow") {
    alertMessage(result);
  }
  updateStack();
}

function updateStack() {
  var elements = stack.stackControl;
  var domItems = document.querySelectorAll(".item");
  domItems.forEach(item => {
    item.innerHTML = "";
    item.classList.add("empty");
  });
  for (var i = 0; i < elements.length; i++) {
    domItems.item(i).innerHTML = elements[i];
    domItems.item(i).className = "item";
  }
}

function alertMessage(message) {
  var alertMessage = document.querySelector(".alert");
  alertMessage.classList.add("visible");
  alertMessage.innerHTML = message;
  setTimeout(function() {
    alertMessage.classList.remove("visible");
    alertMessage.innerHTML = "";
  }, 2000);
}

initStackTemplate();
