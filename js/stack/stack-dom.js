const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const box1 = document.getElementById(`box-1`)
const box2 = document.getElementById(`box-2`)

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
  // ... your code goes here
    if (newStack.canPush() === false) {
      newStack.generateWarningStack
    } else if (newStack.canPush) {
      switch (newStack.stackControl.length) {
        case 0:
          newStack.stackControl.push(box1)
        box1.classList.add(`active`)
        box1.classList.remove(`inactive`)
        console.log(newStack.stackControl)
          break;
          case 1:
            newStack.stackControl.push(box2)
          box2.classList.add(`active`)
          box2.classList.remove(`inactive`)
          console.log(newStack.stackControl)
      
        default:
          break;
      }
    }
  // if (newStack.canPush() && newStack.stackControl.length === 0) {
  //   newStack.stackControl.push(box1)
  //   box1.classList.add(`active`)
  //   box1.classList.remove(`inactive`)
  //   console.log(newStack.stackControl)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // } else if (newStack.canPush() && newStack.stackControl.length === 1) {
  //   newStack.stackControl.push(box2)
  //   box2.classList.add(`active`)
  //   box2.classList.remove(`inactive`)
  // }
};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.isEmpty() === true) {
    newStack.generateWarningStack
  } else if (newStack.isEmpty() === false) {
    box1.classList.add(`inactive`)
    box1.classList.remove(`active`)
    newStack.pop()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

