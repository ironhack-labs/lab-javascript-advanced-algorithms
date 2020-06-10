const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const stackSize = 10
const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ''
};

const renderListStack = () => {
  // ... your code goes here
  warningTopStack.style.display = 'none'
  warningBottomStack.style.display = 'none'
  stackList.innerHTML = ''
  let length = newStack.display().length
  let size = stackSize - length
  newStack.display().forEach(item => {
    let li = document.createElement('li')
    li.className = 'active'
    li.innerText = item
    stackList.appendChild(li)
  })
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li')
    li.className = 'inactive'
    li.innerHTML = '&nbsp;'
    stackList.appendChild(li)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML = 'underflow'
    warningBottomStack.style.display = 'block'
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerHTML = 'overflow'
    warningTopStack.style.display = 'block'
  }
};

const addToStack = () => {
  // ... your code goes here
  if (newStack.canPush()) {
    newStack.push(stackInput.value)
    renderListStack()
    clearStackInput()
  } else {
    generateWarningStack('overflow')
  }
};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.isEmpty()) {
    generateWarningStack('underflow')
  } else {
    newStack.stackControl.pop()
    renderListStack()
    clearStackInput()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
