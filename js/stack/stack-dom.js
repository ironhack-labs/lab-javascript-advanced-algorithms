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
  stackInput.value = ''
};

const renderListStack = () => {
  stackList.innerHTML += `
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>`
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  try {
    const arrayTemp = newStack.push(stackInput.value)
    for(let i = 0;i<arrayTemp.length;i++){
      stackList.children[i].innerHTML = arrayTemp[i]
      stackList.children[i].classList.replace('inactive', 'active')
    }
    clearStackInput()
    } catch (error) {
      // there was an overflow error, handle it
    }
};

const removeFromStack = () => {
  try {
    newStack.pop()
    const arrayTemp = newStack.stackControl
  for(let i = arrayTemp.length; i<newStack.MAX_SIZE;i++){
    stackList.children[i].innerHTML = ''
    stackList.children[i].classList.replace('active', 'inactive')
  }
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
