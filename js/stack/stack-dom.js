const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = "";
};

const renderListStack = (elemnt) => {
  // ... your code goes here
  const newLine = document.createElement('li');
  newLine.setAttribute('class', 'inactive');
  stackList.appendChild(newLine);
  
};

renderListStack();
renderListStack();
renderListStack();
renderListStack();
renderListStack();
renderListStack();
renderListStack();
renderListStack();
renderListStack();
renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.innetHTML = 'underflow'
    warningBottomStack.style.display = 'block'
    
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.style.display = 'block'
    warningTopStack.innetHTML = 'overflow'
    
  }
};

const liStack = document.querySelector('.inactive')

const addToStack = () => {
  // ... your code goes here

  newStack.push(liStack)
  liStack.setAttribute('class', 'active');
  warningBottomStack.style.display = 'none'
  if (newStack.push() === 'Stack Overflow') {
    generateWarningStack('overflow')
  }
};

const removeFromStack = (event) => {
  // ... your code goes here
  if (newStack.pop() === "Stack Underflow") {
    generateWarningStack('underflow')
  } else {
    liStack.setAttribute('class', 'inactive');
    
  if (newStack.stackControl.length <= 0) {
    warningTopStack.style.display = 'none';
      //console.log(newStack.stackControl.length)
  }
    //renderListStack()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);


// console.log(liStack.style)