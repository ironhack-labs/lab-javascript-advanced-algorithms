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

  let stack = stackInput.value
  stackInput.value = ""
  return stack
};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    stackList.innerHTML += "<li class='inactive'></li>"
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.innerHTML= "underflow"
    warningBottomStack.style.display = "block"
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerHTML = "overflow"
    warningTopStack.style.display = "block"
  }
};

const addToStack = () => {
  // ... your code goes here
  if (newStack.canPush()) {
    warningBottomStack.style.display = 'none'
    let element = document.querySelector('#stack-list .inactive');
    element.classList = 'active';
    let stack = clearStackInput();
    element.innerHTML = stack;
    newStack.push(stack);
  }
  else {
    generateWarningStack("overflow")
  }
  };

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.isEmpty()) {
    generateWarningStack('underflow')
  } else {
    warningTopStack.style.display = 'none'
     const stack = document.querySelector('#stack-list .active')
    stack.classList = 'inactive'
    newStack.pop()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
