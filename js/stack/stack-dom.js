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

const listStack = document.querySelectorAll('.list-stack li');

newStack.MAX_SIZE = listStack.length;

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = '';
};

const renderListStack = () => {
  const inputVal = stackInput.value;
  if (inputVal !== '') {
    listStack[newStack.stackControl.length].textContent = inputVal;
  } else {
    listStack[newStack.stackControl.length].textContent = '';
  }
  listStack[newStack.stackControl.length].classList.toggle('active');

  clearStackInput();
};

// renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    if (warningBottomStack.style.display === 'block') {
      warningBottomStack.style.display = 'none';
    } else {
      warningBottomStack.style.display = 'block';
    }
    warningBottomStack.textContent = type;
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
    if (warningTopStack.style.display === 'block') {
      warningTopStack.style.display = 'none';
    } else {
      warningTopStack.style.display = 'block';
    }
    warningTopStack.textContent = type;
  }
};

const addToStack = () => {
  try {
    // ... your code goes here
    // si el control es igual que el max size
    if (newStack.stackControl.length === newStack.MAX_SIZE) {
      throw 'overflow';
    } else {
      // si no es igual que el max size
      warningBottomStack.style.display = 'none';
      renderListStack();
      newStack.stackControl.push(1);
    }
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningStack(error);
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
    if (!newStack.stackControl.length) {
      throw 'underflow';
    } else {
      newStack.stackControl.pop();
      warningTopStack.style.display = 'none';
      renderListStack();
    }
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningStack(error);
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
