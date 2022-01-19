const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
const stackListLi = document.querySelectorAll('.list-stack li');

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.textContent = 'underflow';
  } else if (type === 'overflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.textContent = 'overflow';
  }
};

const addToStack = () => {
  try {
    const stack = newStack.push(1);
    stackListLi[stack.length - 1].classList.replace('inactive', 'active');
    stackListLi[stack.length - 1].textContent = stackInput.value;
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  newStack.pop();
  stackListLi[newStack.stackControl.length].classList.replace(
    'active',
    'inactive'
  );
  stackListLi[newStack.stackControl.length].textContent = '';
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
