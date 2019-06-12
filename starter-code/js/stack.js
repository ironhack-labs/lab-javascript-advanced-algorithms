let stack = new StackDataStructure();
let addBtn = document.querySelector(".add");
let takeBtn = document.querySelector(".take");
let input = document.querySelector(".type");
let list = document.querySelector(".list");
let over = document.querySelector(".over");
let under = document.querySelector(".under");

// addBtn.addEventListener("click",addInputToList())
// takeBtn.addEventListener("click", underSwitch());

function addInputToList() {
  let bar = input.value;
  let newLi = document.createElement("li");
  let textLi = document.createTextNode(bar);

  if (stack.stackControl.length < stack.MAX_SIZE) {
    newLi.appendChild(textLi);
    stack.stackControl.push(textLi);
    list.insertBefore(newLi, list.firstChild);
    // underSwitch()
    console.log("Añado Elemento");
    console.log(stack.stackControl);
  } else {
    console.log("No puedo añadir más");
  }
  // node.setAttribute('class', '')
}

function takeFromList() {
  let newLi = document.querySelectorAll("li");

  if (stack.stackControl.length == 0) {
    list.appendChild(newLi);
    newLi.createTextNode("Stack Underflow");
    newLi.setAttribute("class", "under");
    console.log("No puedo borrar mas");
    // underSwitch()
  } else {
    list.firstChild.remove();
    stack.stackControl.pop();

    console.log("Borro elemento");
    console.log(stack.stackControl);
  }
}

// window.onload = createUnder()

function underSwitch() {
  let newLi = document.createElement("li");
  let under = document.querySelector(".under");
  if (stack.stackControl.length == 0) {
    console.log("underSwitch = ON");
    createUnder();
  } else {
    console.log("underSwitch = OFF");
    removeUnder();
  }

  function createUnder() {
    let newLi = document.createElement("li");
    list.appendChild(newLi);
    newLi.innerHTML = "Stack Underflow";
    newLi.setAttribute("class", "under");
  }

  function removeUnder() {
    list.removeChild(under);
  }
}
