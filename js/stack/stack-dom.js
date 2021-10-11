// the ul
const stackList = document.getElementById('stack-list');
// the input form where we could type in the new Stack Element's text
const stackInput = document.getElementById('stack-input');
// the whole container
const container = document.getElementById('container');
// overflow indicator
const warningTopStack = document.querySelector('#stack-container .warning-top');
// underflow indicator
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  clearStackInput();
  stackList.innerHTML = '';
  newStack.display().forEach((el) => {
    const newStackElement = document.createElement('li');
    newStackElement.classList.add('active');
    newStackElement.textContent = el;
    stackList.appendChild(newStackElement);
  });
  for (let i = 0; i < newStack.MAX_SIZE - newStack.display().length; i++) {
    const newStackElement = document.createElement('li');
    newStackElement.classList.add('inactive');
    stackList.appendChild(newStackElement);
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'STACK_OVERFLOW') {
    warningTopStack.textContent = 'STACK OVERFLOW';
    warningTopStack.style.display = 'block';
  } else if (type === 'STACK_UNDERFLOW') {
    warningBottomStack.textContent = 'STACK UNDERFLOW';
    warningBottomStack.style.display = 'block';
  }
};

const addToStack = () => {
  try {
    warningBottomStack.style.display = 'none';
    newStack.push(stackInput.value);
    console.log(newStack.display());
    renderListStack();
  } catch (error) {
    console.log(error.message);
    generateWarningStack(error.message);
  }
};

const removeFromStack = () => {
  try {
    warningTopStack.style.display = 'none';
    newStack.pop();
    renderListStack();
  } catch (error) {
    generateWarningStack(error.message);
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
