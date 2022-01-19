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
  stackInput.value = 0
};

const renderListStack = () => {
  for(i=0; i<10; i++){
    let stackItem = document.createElement('li')
  stackList.appendChild(stackItem)
  stackItem.classList.add('inactive')}


};


const generateWarningStack = (type) => {
  if (type === 'underflow') {
    alert ('UNDERFLOW')
  } else if (type === 'overflow') {
    ALERT ('OVERFLOW')
  }
};

const addToStack = () => {
  try {
    newStack.push(stackInput.value)
    
  } catch (error) {
   generateWarningStack()
  }
};

const removeFromStack = () => {
  try {
    newStack.pop()
  } catch (error) {
    generateWarningStack()
  }
};
document.addEventListener('load', renderListStack)
addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
