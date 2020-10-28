const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {

  !stackInput.length ? stackInput.value = '' : false

};

const renderListStack = () => {

  for (let i = 0; i < 10; i++){
    const newStack = document.createElement('li')
    newStack.classList.add('inactive')
    stackList.appendChild(newStack)
  }
};

renderListStack();

function generateWarningStack(type) {
  if (type === 'underflow') {
    return warningBottomStack.style.display = 'block'
  } else if (type === 'overflow') {
    return warningTopStack.style.display = 'block'
  }
}

const addToStack = () => {

  const adToStack = stackList.querySelectorAll('.inactive')
  adToStack[0].classList.replace('inactive', 'active')
  const getText = stackInput.value
  adToStack[0].innerText = getText

  clearStackInput()

};

const removeFromStack = () => {

  const removeToStack = stackList.querySelectorAll('.active')
  removeToStack[removeToStack.length - 1].classList.replace('active', 'inactive')
  const remText = stackInput.value
  removeToStack[removeToStack.length - 1].innerText = ''
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);