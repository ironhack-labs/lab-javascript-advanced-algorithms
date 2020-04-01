const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  
};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const liElement = document.createElement('li')
    liElement.setAttribute('class', 'inactive')
    stackList.appendChild(liElement)
  } 
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
  const activeLi = document.querySelector('inactive')
  activeLi.setAttribute('class', 'active')
  }
};

const removeFromStack = () => {
  // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
