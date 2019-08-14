// Initalize form variables to get value and add event listener
let newElement = document.getElementById("stack-value");
let addBtn = document.getElementById("stack-add-btn");
let takeBtn = document.getElementById("stack-take-btn");
let stackElements = document.getElementsByClassName("stack");

addBtn.addEventListener("click", addToStack);
takeBtn.addEventListener("click", takeFromStack);

// Add to stack and remove from stack functions
function addToStack() {
  console.log(newElement.value);

  if (stack.canPush()) {
    stack.push(newElement.value);
    let stackIndex = getStackPosition();
    let position = stackElements.length - stackIndex - 1;
    stackElements[position].innerText = stack.stackControl[stackIndex];
    stackElements[position].classList.toggle("empty");
  } else {
    let stackIndex = getStackPosition();
    let position = stackElements.length - stackIndex - 1;
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
    stack.pop();
    console.log(stack);
    stackElements[position].innerText = "EMPTY";
    stackElements[position].classList.toggle("empty");
  } else {
    stackElements[9].innerText = "Stack Underflow";
    stackElements[9].style.background = "#991212";
    setTimeout(() => {
      stackElements[9].innerText = "EMPTY";
      stackElements[9].removeAttribute("style");
    }, 1000);
  }
}

function getStackPosition() {
  return stack.stackControl.length - 1;
}
