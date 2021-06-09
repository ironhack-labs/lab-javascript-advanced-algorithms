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
  const allStacks = document.querySelectorAll(".stack-list .inactive")
  allStacks.forEach(function eachStack() {
    allStacks.style.backgroundColor = 'blue'
  })


};

const renderListStack = () => {
  const allStacks = document.querySelectorAll(".stack-list .inactive")
  allStacks.forEach(function eachStack() {
    allStacks.style.backgroundColor = 'gray'
  })
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    const button1 = document.querySelector('.add-stack')
    return button1.window.alert('underflow')
  } else if (type === 'overflow') {
    const button1 = document.querySelector('.take-stack')
    return button1.window.alert('overflow')
  }
};

const addToStack = () => {
  try {

  } catch (error) {
    // there was an overflow error, handle it
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
