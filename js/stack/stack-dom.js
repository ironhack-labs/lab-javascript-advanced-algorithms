const stack = new Stack();

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

};

const renderListStack = () => {
  for (let i = 0; i < stack.MAX_SIZE; i++) {
    let liChild = document.createElement('li');
    liChild.setAttribute('class', 'inactive');
    stackList.appendChild(liChild);
  }
};

renderListStack();

// Errors handled on add/remove functions
/*
const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};
*/


const addToStack = () => {
  try {
    stack.push();
    let lastLi = document.getElementsByClassName('inactive')[0];
    lastLi.setAttribute('class', 'active');

    if (stack.stackControl.length === 1) {
      let stackError = document.getElementsByClassName('warning-bottom alert alert-danger')[0];
      stackError.setAttribute('style', 'display: none');
    }
  } catch (error) {
    let stackError = document.getElementsByClassName('warning-top alert alert-danger')[0];
    stackError.setAttribute('style', 'display: block');
    stackError.innerHTML = "overflow";
  }
};

const removeFromStack = () => {
  try {
    stack.pop();
    let firstLi = document.getElementsByClassName('active')[stack.stackControl.length];
    firstLi.setAttribute('class', 'inactive');

    if (stack.stackControl.length === stack.MAX_SIZE - 1) {
      let stackError = document.getElementsByClassName('warning-top alert alert-danger')[0];
      stackError.setAttribute('style', 'display: none');
    }
  } catch (error) {
    let stackError = document.getElementsByClassName('warning-bottom alert alert-danger')[0];
    stackError.setAttribute('style', 'display: block');
    stackError.innerHTML = "underflow";
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
