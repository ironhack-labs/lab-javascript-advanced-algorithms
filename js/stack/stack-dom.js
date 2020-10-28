const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
 let inputValue = stackInput.value 
 stackInput.value = ""
 return inputValue
};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++){
    stackList.innerHTML += "<li class = 'inactive'></li>"
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML= "underflow"
    warningBottomStack.style.display = "block" //cambiar valor a predeterminado
  } else if (type === 'overflow') {
    warningTopStack.innerHTML = "overflow"
    warningTopStack.style.display = "block"
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    warningBottomStack.style.display = "none"
    const li = document.querySelector('#stack-list .inactive')
    li.classList = 'active' 
    const inputValue = clearStackInput() 
    li.innerHTML = inputValue 
    newStack.push(inputValue)
  } else {
    generateWarningStack("overflow")
  }
};

const removeFromStack = () => {
  if (newStack.isEmpty()) {
    generateWarningStack("underflow")
  } else {
    warningTopStack.style.display = "none"
    const li = document.querySelectorAll('#stack-list .active')
    li.classList = 'inactive'
    newStack.pop()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
