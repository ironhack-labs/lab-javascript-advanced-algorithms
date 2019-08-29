const addToStackBtn = document.getElementById("add-to-stack-btn");
const removeFromStackBtn = document.getElementById("remove-from-stack-btn");
const stackElementInput = document.getElementById("stackInput");
const stackElementValue = document.getElementById("element-value");
const stackElements = document.getElementsByClassName("stack");


addToStackBtn.onclick = addToStack;
removeFromStackBtn.onclick = takeFromStack;

function addToStack() {
  console.log("Addind an element to the stack", stackElementInput.value);

  if (stack.canPush()) {
    stackElementValue.innerText = "";
    stackElementValue.innerText = `Element added to the stack: ${stackElementInput.value}`;
    stack.push(stackElementInput.value);

    const stackLastElem = stack.stackControl.length - 1;
    const position = stackElements.length - stackLastElem - 1;

    stackElements[position].innerText = stack.stackControl[stackLastElem];
    stackElements[position].style.backgroundColor = "#4dace9";
    stackElements[position].classList.toggle("empty");
    
  } else {
    const stackLastElem = stack.stackControl.length - 1;
    const position = stackElements.length - stackLastElem - 1
    stackElementValue.innerText = "";
    stackElementValue.innerText = `Stack Overflow`;
    stackElements[position].innerText = "Stack Overflow";
    stackElements[position].style.color = "#e384a6";
    stackElements[position].style.background = "#f3e2e2";
  }
}



function takeFromStack() {
  console.log("Removing an element from the stack", stackElementInput.value);

  stackElementValue.innerText = "";
  //   stackElementValue.innerText = `Element removed from the stack: ${stackElementInput.value}`;
  const stackLastElem = stack.stackControl.length - 1;
  const position = stackElements.length - stackLastElem - 1;

  if (!stack.isEmpty()) {    
    stackElementValue.innerText = "";
    stackElementValue.innerText = `Element removed from the stack: ${stack.pop()}`;
    stackElements[position].style.background = "#ededed";
    stackElements[position].classList.toggle("empty");
  } else {
    stackElementValue.innerText = "";
    stackElementValue.innerText = "Stack Underflow";
    stackElements[stackLastElem].innerText = "Stack Underflow";
    stackElements[stackLastElem].style.background = "#991212";
    stackElements[stackLastElem].style.color = "#FFFFFF";
  }
}

