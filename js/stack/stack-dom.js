const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
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
  if (event.target.id == 'add-stack' && newStack.canPush()) {
    const items = document.createElement('li')
    stackList.appendChild(items).setAttribute('class', 'item')
    newStack.push(items)
  }
}

const removeFromStack = () => {
  if (event.target.id == 'take-stack') {
    const rmv = () => {
      newStack.removeChild('item')
      newStack.pop(rmv)
    }
  }
}

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
