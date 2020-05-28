const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  stackList.innerHTML = '';
  newStack.stackControl.forEach(item => {
    const newStackItem = document.createElement('li');
    newStackItem.innerHTML = item;
    stackList.appendChild(newStackItem);
  })
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML = 'Stack underflow!!!';
    warningBottomStack.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopStack.innerHTML = 'Stack overflow!!!';
    warningTopStack.style.display = 'block';
  }
};

const addToStack = () => {
  warningBottomStack.style.display = 'none';
  if (newStack.canPush()) {
    newStack.push(stackInput.value);
    renderListStack();
    clearStackInput();
  } else {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  warningTopStack.style.display = 'none';
  if (newStack.isEmpty()) {
    generateWarningStack('underflow');
  } else {
    newStack.stackControl.pop();
    renderListStack();
    clearStackInput();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
