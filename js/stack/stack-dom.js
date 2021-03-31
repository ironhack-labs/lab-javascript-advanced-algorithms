const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

//menos importante limpia el input
const clearStackInput = () => {
  // ... your code goes here
};

//pinta las cajas despues de add() o pop()
const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

//muestra la alerta
const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

//añaden o eliminan
const addToStack = () => {
  // ... your code goes here
  console.log(newStack)
};

const removeFromStack = () => {
  // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
