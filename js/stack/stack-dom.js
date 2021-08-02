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

warningTopStack.innerHTML = 'STACK OVERFLOW';
warningBottomStack.innerHTML = `STACK UNDERFLOW`;

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  stackList.innerHTML = '';
  newStack.display().forEach(
    (element) =>
      (stackList.innerHTML += `
    <li style='background-color: lightgrey; margin-bottom: 2px;'>${element}</li>
  `)
  );
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningBottomStack.style = 'display:block';
  } else if (type === 'overflow') {
    warningTopStack.style = 'display:block';
  }
};

const addToStack = () => {
  try {
    newStack.push(stackInput.value);
  } catch (error) {
    generateWarningStack('overflow');
  }
  clearStackInput();
  renderListStack();
  warningBottomStack.style = 'display:none';
};

const removeFromStack = () => {
  try {
    newStack.pop();
  } catch (error) {
    generateWarningStack('underflow');
  }
  clearStackInput();
  renderListStack();
  warningTopStack.style = 'display:none';
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
