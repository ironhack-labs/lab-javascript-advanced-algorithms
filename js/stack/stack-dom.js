const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  const value = stackInput.value;
  stackInput.value = '';
  return value;
};

const renderListStack = () => {
  for (let index = 0; index < newStack.MAX_SIZE; index++) {
    stackList.innerHTML += '<li class="inactive"></li>'
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML = 'underflow';
    warningBottomStack.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopStack.innerHTML = 'overflow';
    warningTopStack.style.display = 'block';
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    warningBottomStack.style.display = 'none';
    const firstItem = document.querySelector('#stack-list .inactive');
    firstItem.classList = 'active';
    const value = clearStackInput();
    firstItem.innerHTML = value;
    newStack.push(value);
  } else {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  if (newStack.isEmpty()) {
    generateWarningStack('underflow');
  } else {
    warningTopStack.style.display = 'none';
    const items = document.querySelectorAll('#stack-list .active');
    const lastItem = items[items.length - 1];
    lastItem.classList = 'inactive';
    lastItem.innerHTML = '';
    newStack.pop();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
