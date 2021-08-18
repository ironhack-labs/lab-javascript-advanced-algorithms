const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {};

const renderListStack = () => {
  console.log(newStack.display());
};

renderListStack();

const generateWarningStack = (type) => {
  if (type.includes('OVER')) {
    console.log(type);
  } else if (type.includes('UNDER')) {
    console.log(type);
  }
};

const addToStack = () => {
  try {
    newStack.push('hello');
    renderListStack();
  } catch (error) {
    generateWarningStack(error.message);
  }
};

const removeFromStack = () => {
  try {
    newStack.pop();
    renderListStack();
  } catch (error) {
    generateWarningStack(error.message);
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
