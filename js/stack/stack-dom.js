const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
const list = document.getElementsByClassName('inactive')

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
for(let i = 0;i < newStack.display().length;i++) {
    list[i].classList.remove('inactive')
    list[i].classList.add('active')
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
    newStack.push() 
    renderListStack()
    console.log(newStack.display());
  } catch (error) {
    // there was an overflow error, handle it
    alert(error.message)
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
    newStack.pop()
    console.log(newStack.display());
  } catch (error) {
    // there was an underflow error, handle it
    alert(error.message)
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
