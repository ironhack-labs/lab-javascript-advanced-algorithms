const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = "";
};

const renderListStack = () => {
  newStack.display();
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
  warningBottomStack.style.display = "none"

  const display = stackInput.value;
  if (!newStack.canPush()) {
    generateWarningStack('overflow');
  } else {
    newStack.push(display);
    const eachLi = document.querySelector('.inactive');
    eachLi.classList.add('active');
    eachLi.classList.remove('inactive');
    eachLi.innerHTML = stackInput.value;
    clearStackInput();
  }

};

const removeFromStack = () => {
  warningTopStack.style.display = "none"

  if (newStack.isEmpty()) {
    generateWarningStack('underflow');
  } else {
    newStack.pop();
    const eachOn = document.querySelectorAll(".active");
    const lastOn = eachOn[eachOn.length - 1];
    lastOn.innerHTML = "";
    lastOn.classList.add('inactive');
    lastOn.classList.remove('active');
    clearStackInput();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
