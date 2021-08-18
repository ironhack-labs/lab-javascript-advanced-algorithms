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

const stackArray = [];
const renderListStack = () => {
  // ... your code goes here
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const element = document.createElement('li');
    element.setAttribute('class', `inactive`);
    stackArray.push(element);
    stackList.appendChild(element);
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
    newStack.push('');
    for (let i = 0; i < newStack.stackControl.length; i++) {
      stackArray[i].setAttribute('class', 'active');
    }
    // ... your code goes here
  } catch (error) {
    // there was an overflow error, handle it
    warningTopStack.style.display = 'block';
    warningTopStack.innerHTML = error;
  }
};

const removeFromStack = () => {
  try {
    newStack.pop('');
    stackArray[newStack.stackControl.length].setAttribute('class', 'inactive');
  } catch (error) {
    // there was an underflow error, handle it
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerHTML = error;
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
