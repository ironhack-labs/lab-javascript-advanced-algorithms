// Initalize form variables to get value and add event listener
let newElement = document.getElementById("stack-value");
let addBtn = document.getElementById("stack-add-btn");
let takeBtn = document.getElementById("stack-take-btn");
let stackElements = document.getElementsByClassName("stack");
let stackValueElement = document.getElementById("element1");

addBtn.addEventListener("click", addToStack);
takeBtn.addEventListener("click", takeFromStack);

// Add to stack and remove from stack functions
function addToStack() {
  console.log(newElement.value);

  if (stack.canPush()) {
    stackValueElement.style.color = "#2E2E9C";
    if (newElement.value.length === 0) {
      stackValueElement.innerText = "";
      stackValueElement.innerText = `Added "No value entered"`;
      stack.push('NO VALUE ENTERED');
    }
    else {
      stackValueElement.innerText = "";
      stackValueElement.innerText = `Added ${newElement.value}`;
      stack.push(newElement.value);
    }
    let stackIndex = getStackPosition();
    let position = stackElements.length - stackIndex - 1;
    stackElements[position].innerText = stack.stackControl[stackIndex];
    stackElements[position].classList.toggle("empty");
  } else {
    let stackIndex = getStackPosition();
    let position = stackElements.length - stackIndex - 1;
    stackValueElement.style.color = "#991212";
    stackValueElement.innerText = "";
    stackValueElement.innerText = `Stack Overflow`;
    stackElements[position].innerText = "Stack Overflow";
    stackElements[position].style.background = "#991212";
    setTimeout(() => {
      stackElements[position].innerText = stack.stackControl[stackIndex];
      stackElements[position].removeAttribute("style");
    }, 1000);
  }
}

function takeFromStack() {
  let stackIndex = getStackPosition();
  let position = stackElements.length - stackIndex - 1;

  if (!stack.isEmpty()) {    
    stackValueElement.innerText = "";
    stackValueElement.style.color = "#991212";
    stackValueElement.innerText = stack.pop();
    stackElements[position].innerText = "EMPTY";
    stackElements[position].classList.toggle("empty");
  } else {
    stackValueElement.innerText = "";
    stackValueElement.innerText = "Stack Underflow";
    stackElements[9].innerText = "Stack Underflow";
    stackElements[9].style.background = "#991212";
    stackElements[9].style.color = "#FFFFFF";
    setTimeout(() => {
      stackElements[9].innerText = "EMPTY";
      stackElements[9].removeAttribute("style");
    }, 1000);
  }
}

function getStackPosition() {
  return stack.stackControl.length - 1;
}
