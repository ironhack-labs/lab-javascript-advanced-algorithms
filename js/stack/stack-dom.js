const stackList = document.getElementById('stack-list');          //UL stack
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ''
};

const renderListStack = () => {
  // ... your code goes here
  for (let i = 0; i < 10; i++) {

    const li = document.createElement('li')
    li.classList.add('inactive')
    stackList.appendChild(li)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.style.display = 'block'
    warningBottomStack.textContent = 'Stack Underflow'
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.style.display = 'block'
    warningTopStack.textContent = 'Stack Overflow'

  }
};

const addToStack = () => {
  // ... your code goes here
  if (newStack.canPush()) {

    const length = newStack.stackControl.length
    const li = document.querySelectorAll('#stack-list li')[length]
    li.textContent = stackInput.value

    newStack.push(li.classList.add('active'))
    clearStackInput()
    warningBottomStack.style.display = 'none'

  } else {

    generateWarningStack('overflow')
  }
};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.isEmpty()) {
    generateWarningStack('underflow')

  } else {

    newStack.pop()
    length = newStack.stackControl.length
    const li = document.querySelectorAll('#stack-list li')[length]

    li.classList.remove('active')
    li.textContent = ''
    warningTopStack.style.display = 'none'
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
