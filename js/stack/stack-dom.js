const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();


let count = 0

const clearStackInput = () => {
  stackInput.value = " "

};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    let liElm = document.createElement('li')
    liElm.classList.add("inactive")
    stackList.appendChild(liElm)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "flex"
    warningBottomStack.innerHTML = "Stack Underflow"
  } else if (type === 'overflow') {
    warningTopStack.style.display = "flex"
    warningTopStack.innerHTML = "Stack Overflow"
  }
};

const addToStack = () => {
  warningBottomStack.style.display = "none"
  if (newStack.push() === "Stack Overflow") {
    generateWarningStack("overflow")
  } else {
    document.querySelectorAll(".inactive")[count].classList.add("active")
    document.querySelectorAll(".inactive")[count].innerHTML = stackInput.value
    clearStackInput()
    count++
  }
};

const removeFromStack = () => {
  warningTopStack.style.display = "none"
  if (newStack.pop() === "Stack Underflow") {
    generateWarningStack("underflow")
  } else {
    document.querySelectorAll(".inactive", ".active")[count - 1].classList.remove("active")
    document.querySelectorAll(".inactive", ".active")[count - 1].innerHTML = ""
    clearStackInput()
    count--
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
