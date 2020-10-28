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
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  console.log(newStack.canPush())
  if (newStack.canPush() === true) {
    newStack.push('*')
    for (let i = 0; i < newStack.stackControl.length; i++) {
      document.querySelectorAll('#stack-list li')[i].setAttribute('class', 'active')
    }
  } else {
    const warningDiv = document.querySelector('#stack-container .warning-top')
    warningDiv.innerHTML = 'overflow'
    warningDiv.setAttribute('style', 'display: block;')

  } if (newStack.stackControl.length > 0) {
    const warningDiv = document.querySelector('#stack-container .warning-bottom')
    warningDiv.setAttribute('style', '')
  }

};

const removeFromStack = () => {
  console.log(newStack.isEmpty())
  if (newStack.isEmpty() === false) {
    document.querySelectorAll('#stack-list li')[newStack.stackControl.length - 1].setAttribute('class', 'inactive')
    newStack.pop()
  } else {
    const warningDiv = document.querySelector('#stack-container .warning-bottom')
    warningDiv.innerHTML = 'underflow'
    warningDiv.setAttribute('style', 'display: block;')

  } if (newStack.stackControl.length < 10) {
    const warningDiv = document.querySelector('#stack-container .warning-top')
    warningDiv.setAttribute('style', '')
  }



};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

