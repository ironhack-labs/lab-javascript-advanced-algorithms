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
    const newLis = document.createElement("li")
    stackList.appendChild(newLis).classList.add('inactive')
  }

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

  newStack.push(stackInput.value)

  newStack.stackControl.forEach(elm => {
    const lis = document.querySelector('#stack-list .inactive')
    lis.className = 'active'
    lis.innerHTML = elm
  })

  clearStackInput()

};

const removeFromStack = () => {
  newStack.pop()

  newStack.stackControl.forEach(elm => {
    const lis = document.querySelector('#stack-list .active')
    lis.className = 'inactive'
    lis.innerHTML = ''
  })
  console.log(newStack.stackControl)
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
