const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';  
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';    
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';    
  }
};

const addToStack = () => {
  if (newStack.push(stackInput.value) === 'Stack Overflow') {
    generateWarningStack('overflow');
  } else {
    clearStackInput();
    renderListStack();
  }
};

const removeFromStack = () => {
  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('underflow');
  } else {
    clearStackInput();
    renderListStack();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
