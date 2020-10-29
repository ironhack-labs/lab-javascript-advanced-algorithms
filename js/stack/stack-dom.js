const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = ''
};

const renderListStack = () => {

  

  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    stackList.innerHTML += "<li class = 'inactive'></li>"
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {

    warningBottomStack.style.display = 'block'
    warningBottomStack.innerHTML = type

  } else if (type === 'overflow') {

    warningTopStack.style.display = 'block'
    warningTopStack.innerHTML = type

  }
};

const addToStack = () => {
  if (newStack.push(stackInput.value) === 'Stack Overflow') {
    generateWarningSt('overflow')
  }
  else {
    clearStackInput()
    renderListStack()
  }
};

const removeFromStack = () => {

  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('underflow')
  } else {
    renderListStack()
  }

};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
