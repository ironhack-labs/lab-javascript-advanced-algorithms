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
  const value = stackInput.value;
  stackInput.value = "";
  return value;
};

// clearStackInput()

const renderListStack = () => {
  // ... your code goes here
  for (let index = 0; index < newStack.MAX_SIZE; index++) {
    stackList.innerHTML += '<li class="inactive"></li>'
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.innerHTML = "underflow";
    warningBottomStack.style.display = "block";
    setTimeout(() => {
      warningBottomStack.style.display = "none";
    }, 2000);
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerHTML = "overflow";
    warningTopStack.style.display = "block";
    setTimeout(() => {
      warningTopStack.style.display = "none";
    }, 2000);
  }
};

const addToStack = () => {
  // ... your code goes here
  if (newStack.canPush()) {
    warningBottomStack.style.display = 'none';
    const firstItem = document.querySelector('#stack-list .inactive');
    firstItem.classList = 'active';
    const value = clearStackInput();
    firstItem.innerHTML = value;
    newStack.push(value);
  } else {
    generateWarningStack("overflow");
  }
};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.isEmpty()) {
    generateWarningStack('underflow');
  } else {
    warningTopStack.style.display = 'none';
    const items = document.querySelectorAll('#stack-list .active');
    const lastItem = items[items.length-1]
    lastItem.classList = 'inactive';
    lastItem.innerHTML = "";
    newStack.pop();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
