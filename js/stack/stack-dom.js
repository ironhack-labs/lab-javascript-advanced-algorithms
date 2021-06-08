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
  stackInput.value = '';

  warningBottomStack.style.display = 'none';
  warningBottomStack.textContent = '';
  warningTopStack.style.display = 'none';
  warningTopStack.textContent = '';
};

const renderListStack = () => {
  let visualStack = document.querySelectorAll('.container .list-stack li');
  for (let i = 0; i < newStack.display().length; i++) {
    visualStack[i].classList.replace('inactive', 'active');
    visualStack[i].textContent = newStack.display()[i];
  }

  for (let i = newStack.display().length; i < newStack.MAX_SIZE; i++) {
    visualStack[i].classList.replace('active', 'inactive');
    visualStack[i].textContent = '';
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // alert('STACK UNDERFLOW!');
    warningBottomStack.style.display = 'block';
    warningBottomStack.textContent = 'STACK UNDERFLOW';
  } else if (type === 'overflow') {
    // alert('STACK OVERFLOW!');
    warningTopStack.style.display = 'block';
    warningTopStack.textContent = 'STACK OVERFLOW';
  }
};

const addToStack = () => {
  try {
    newStack.push(stackInput.value);

    clearStackInput();
    renderListStack();
  } catch (error) {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  try {
    newStack.pop();

    clearStackInput();
    renderListStack();
  } catch (error) {
    generateWarningStack('underflow');
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
