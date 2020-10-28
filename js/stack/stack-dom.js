const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = ''
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'Underflow') {
    warningBottomStack.style.display = 'block'
    warningBottomStack.innerText = type
  } else if (type === 'Overflow') {
    warningTopStack.style.display = 'block'
    warningTopStack.innerText = type
  }
};

const addToStack = () => {
  if (newStack.push(stackInput.value) === 'Stack Overflow') {
    generateWarningStack('Overflow')
  } else {
    clearStackInput()
    renderListStack()
  }
};

const removeFromStack = () => {
  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('Underflow')
  } else {
    renderListStack()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
