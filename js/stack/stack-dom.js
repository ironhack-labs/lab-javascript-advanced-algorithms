const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {

  for (let i = 0; i < 10; i++) {
    const listLi = document.createElement('li')
    listLi.classList.add('inactive')
    stackList.appendChild(listLi)

  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block'
    warningBottomStack.innerHTML = 'Stack Underflow'
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block'
    warningTopStack.innerHTML = 'Stack Overflow'
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    const stackLength = newStack.stackControl.length
    const li = document.querySelectorAll('#stack-list li')[stackLength]
    li.textContent = stackInput.value
    newStack.push(li.classList.add('active'))
    clearStackInput()
    warningBottomStack.style.display = 'none'
  } else {
    generateWarningStack('overflow')
  }
};

const removeFromStack = () => {
  newStack.pop()
  stackLength = newStack.stackControl.length
  const li = document.querySelectorAll('#stack-list li')[stackLength]
  li.classList.remove('active')
  li.textContent = ''
  warningTopStack.style.display = 'none'
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);