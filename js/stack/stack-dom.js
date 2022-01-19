const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const cellNodesArr = document.querySelectorAll('.list-stack li')

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ''
};

const renderListStack = () => {
  // ... your code goes here
  for (let i = 0; i < newStack.stackControl.length; i++) {
    for (let j = 0; j < cellNodesArr.length; j++) {
      cellNodesArr[i].classList.replace('inactive', 'active')
    }
  }

};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  try {
    // ... your code goes here
    newStack.push(1)
    renderListStack()
  } catch (error) {
    // there was an overflow error, handle it    
    generateWarningStack('overflow')

  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
