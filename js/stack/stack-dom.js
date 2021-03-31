const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  inputName = stackInput.value = ""
};

const renderListStack = () => {
  // ... your code goes here
  inputName = stackInput.value
  //clearStackInput()
  return inputName
};

let dangerBottom = document.querySelector("#stack-container>.warning-bottom")
renderListStack();

const generateWarningStack = type => {

  if (type === 'underflow') {
    // ... your code goes here
    dangerBottom.style.display = "block"
    dangerBottom.textContent = 'underflow'

  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.style.display = "block"
    warningTopStack.textContent = 'overflow'

  }
};


const addToStack = () => {
  inputName = renderListStack()

  // ... your code goes here
  if (newStack.canPush()) {

    dangerBottom.style.display = "none"
    dangerBottom.textContent = ''
    stackArray = newStack.push(1)
    const liElems = document.querySelectorAll("#stack-list> li")

    liElems[stackArray.length - 1].classList.add('active')
    liElems[stackArray.length - 1].classList.remove('inactive')
    liElems[stackArray.length - 1].textContent = inputName
    clearStackInput()

  } else {
    type = 'overflow'
    generateWarningStack(type)

  }

};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.isEmpty()) {

    type = 'underflow'
    generateWarningStack(type)

  } else {

    stackArray = newStack.stackControl
    popElmt = stackArray.pop()

    let liElemsActive = document.querySelectorAll("#stack-list> li.active")
    console.log(liElemsActive);
    const activeElm = liElemsActive.length

    warningTopStack.style.display = "none"
    warningTopStack.textContent = ''
    liElemsActive[activeElm - 1].classList.add('inactive')
    liElemsActive[activeElm - 1].classList.remove('active')
    liElemsActive[activeElm - 1].textContent = ""

  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
