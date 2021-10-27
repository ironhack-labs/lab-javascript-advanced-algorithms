//const Stack = require("./stack-data-structure");

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

    addTemp = document.querySelector('.inactive');
    addTemp.classList.add("active");
    addTemp.classList.remove("inactive");

    newStack.push();


  } catch (error) {
    // there was an overflow error, handle it
  }
};

const removeFromStack = () => {
  try {
    
    addTemp = document.querySelector('.active');
    addTemp.classList.add("inactive");
    addTemp.classList.remove("active");

    newStack.pop();

  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
