// const Stack = require("./stack-data-structure");

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
  let stackInputElement = document.querySelector('#stack-input')
  stackInputElement.value = ''
};

const renderListStack = () => {
  const inactiveLis = newStack.MAX_SIZE - newStack.stackControl.length;
  
  while (stackList.firstChild) {
    stackList.removeChild(stackList.lastChild);
  }

  // add active li's
  newStack.stackControl.forEach(task => {
    let stackTask = document.createElement('li');
    stackTask.innerText = task;
    stackTask.classList.add('active')
    stackList.appendChild(stackTask)
  })

  // Add inactive li's
  for (let i = 0; i < inactiveLis; i++) {
    let stackTask = document.createElement('li');
    stackTask.classList.add('inactive')
    
    stackList.appendChild(stackTask)
  }
};

renderListStack();

const generateWarningStack = (type) => {

  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = "Underflow"
  } 
  else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerText = "Overflow"
  }
};

const addToStack = () => {
  try {
    warningBottomStack.style.display = 'none';
    newStack.push(stackInput.value)

    clearStackInput()
    renderListStack();

  } catch (error) {
    generateWarningStack('overflow')
  }
};

const removeFromStack = () => {
  try {
    warningTopStack.style.display = 'none';
   
    newStack.pop()
    renderListStack();

  } catch (error) {
    generateWarningStack('underflow')
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);


