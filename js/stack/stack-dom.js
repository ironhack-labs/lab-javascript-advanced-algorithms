const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  (stackInput.value != '') ? return stackInput.value = '' : false
};

const renderListStack = () => {
  for (let i = 0; i < 10; i++) {
    const newStack = document.createElement('li')
    newStack.classList.add('inactive')
    stackList.appendChild(newStack)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    return warningBottomStack.style.display = 'block'
  } else if (type === 'overflow') {
    return warningTopStack.style.display = 'block'
  }
};

const addToStack = () => {
  const actStackElm = stackList.querySelectorAll('.inactive')
  actStackElm[0].classList.replace('inactive', 'active')
  const inputText = stackInput.value
  actStackElm[0].innerText = inputText
  clearStackInput()
};

const removeFromStack = () => {
  const inactStackElm = stackList.querySelectorAll('.active')
  inactStackElm[inactStackElm.length - 1].classList.replace('active', 'inactive')
  inactStackElm[inactStackElm.length - 1].innerText = ''
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
