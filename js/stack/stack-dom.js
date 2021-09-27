const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  let stackLength = newStack.stackControl.length;
  let stackLi = document.querySelectorAll("#stack-list li");

  stackLi[stackLength].className = "inactive";
  stackLi[stackLength].textContent = "";

};

const renderListStack = () => {
  let li = document.createElement("li");
  li.className = "inactive";

  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    stackList.appendChild(li.cloneNode());
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningTopStack.style.display = "block";
    warningTopStack.textContent = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block";
    warningTopStack.textContent = type;
  }
};

const addToStack = () => {
  try {
    let newStackItem = stackInput.value;
    let updatedStack = newStack.push(newStackItem);
    let stackLi = document.querySelectorAll("#stack-list li");

    for (let i = 0; i < updatedStack.length; i++) {
      stackLi[i].className = "active";
      stackLi[i].textContent = updatedStack[i];
    }

    if (warningTopStack.textContent = "underflow") {
      warningTopStack.style.display = "none";
    }
  } catch (error) {
    generateWarningStack('overflow');
  }

  stackInput.value = "";
};

const removeFromStack = () => {
  try {
    newStack.pop();
    clearStackInput();

    if (warningTopStack.textContent = "overflow") {
      warningTopStack.style.display = "none";
    }
  } catch (error) {
    generateWarningStack('underflow');
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
