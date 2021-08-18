
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

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    return pop();
  } else if (type === 'overflow') {
    return push();
  }
};

const addToStack = () => {
  try {
    newStack.push('item');
    console.log(newStack.display())
  } catch (error) {
    console.log(error.message)
  }
};

const removeFromStack = () => {
  try {
    newStack.pop('item');
    console.log(newStack.display());
  } catch (error) {
    console.log(error.message);
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
