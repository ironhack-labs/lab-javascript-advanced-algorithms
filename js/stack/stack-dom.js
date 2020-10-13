const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = "";
};

const renderListStack = () => {
  while(stackList.firstChild){
    stackList.removeChild(stackList.lastChild);
  }
  newStack.display();
};

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningTopStack.innerHTML = "Cannot remove items from empty stack";
    warningTopStack.style.display = "unset";
    setTimeout(() => {
      warningTopStack.style.display = "none";
    }, 5000);
  } else if (type === 'overflow') {
    warningTopStack.innerHTML = "Cannot add items to full stack";
    warningTopStack.style.display = "unset";
    setTimeout(() => {
      warningTopStack.style.display = "none";
    }, 5000);
  }
};

const addToStack = () => {
  if(stackInput.value !== ""){
    if(newStack.push(stackInput.value) === "Stack Overflow"){
      generateWarningStack("overflow");
    }
    renderListStack();
    clearStackInput();
  }
};

const removeFromStack = () => {
  if(newStack.pop() === "Stack Underflow"){
    generateWarningStack("underflow");
  }
  renderListStack();
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
