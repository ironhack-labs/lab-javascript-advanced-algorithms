const newStack = new StackDataStructure();



const clearStackInput = () => {
const stackInput = document.getElementById('stack-input').value
  return stackInput;
};


const stackList = document.getElementById('stack-list');
const renderListStack = () => {
  
};

renderListStack();


const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML = 'underflow';
    
  } else if (type === 'overflow') {
    warningTopStack.innerHTML = 'overflow';
  
  }
};

const addToStack = () => {
  
  
};

const removeFromStack = () => {
  
}


const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
