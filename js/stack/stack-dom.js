const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = ""
};

const renderListStack = () => {
  for (i = 0; i < newStack.MAX_SIZE; i++) {
    let listElement = document.createElement('li')
    stackList.appendChild(listElement)
    listElement.classList.toggle('inactive')
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "block"
    warningBottomStack.innerHTML = "Stack Underflow"
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block"
    warningTopStack.innerHTML = "Stack Overflow"
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    let allLi = document.querySelectorAll('li')
    let index = newStack.stackControl.length
    allLi[index].classList.toggle('inactive')
    allLi[index].classList.toggle('active')
    allLi[index].innerHTML = stackInput.value
    newStack.push(stackInput.value)
    clearStackInput()
  } else {
    generateWarningStack("overflow")
  }
};

const removeFromStack = () => {
  if (newStack.isEmpty()) {
    generateWarningStack("underflow")
  } else {
    let allLi = document.querySelectorAll('li')
    let index = newStack.stackControl.length - 1
    allLi[index].classList.toggle('active')
    allLi[index].classList.toggle('inactive')
    allLi[index].innerHTML = ""
    newStack.pop()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);