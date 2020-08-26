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
  for (let i = 0; i < 10; i++) {
    let li = document.createElement('li')
    li.className = 'inactive'
    stackList.appendChild(li)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "block"
    warningBottomStack.innerText = type
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block"
    warningTopStack.innerText = type
  }
};



const addToStack = () => {

  if (newStack.push(stackInput.value) !== 'Stack Overflow') {
    warningBottomStack.style.display = "none"
    const target = stackList.childNodes[newStack.stackControl.length - 1]
    target.classList.toggle('inactive')
    target.classList.toggle('active')
    
    target.textContent = stackInput.value
    stackInput.value = ""
  } else if (!newStack.canPush()) {
    generateWarningStack("overflow")
  }
};

const removeFromStack = () => {
  if (newStack.pop() !== 'Stack Underflow') {
    warningTopStack.style.display = "none"
    const target = stackList.childNodes[newStack.stackControl.length]
    target.classList.toggle('active')
    target.classList.toggle('inactive')

    stackInput.value = ""
    target.textContent = stackInput.value
  } else if (newStack.isEmpty()) {
    generateWarningStack("underflow")
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
