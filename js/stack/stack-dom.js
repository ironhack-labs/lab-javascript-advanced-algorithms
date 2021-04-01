const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
const allActiveLi = document.querySelectorAll(".active")

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = ''
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // console.log("The Stack is full")
    warningBottomStack.style.display = "block"
    warningBottomStack.innerHTML = 'underflow'

  } else if (type === 'overflow') {
    // console.log("The Stack is Empty")
    warningTopStack.style.display = "block"
    warningTopStack.innerHTML = 'underflow'
  } else {
    warningTopStack.style.display = "none"
    warningBottomStack.style.display = "none"
  }
};

const addToStack = () => {
  // console.log("We are trying to add a new Stack") test
  newStack.push(stackInput.value)
  console.log(newStack.stackControl)
  if (!newStack.canPush()) {
         generateWarningStack('overflow')
  } else {
    warningTopStack.style.display = "none"
  }
 // console.log(newStack.stackControl.length)
  const liEntryInactive = stackList.querySelector('.inactive')
  liEntryInactive.classList.add('active')
  liEntryInactive.classList.remove('inactive')
  liEntryInactive.innerHTML = stackInput.value
  clearStackInput ()
};

const removeFromStack = () => {
  // console.log("We are trying to remove the last Stack") test
  newStack.pop()
  if (newStack.isEmpty()) {
    generateWarningStack('underflow')
  } else {
    warningBottomStack.style.display = "none"
  }
  // console.log(newStack.stackControl.length) test
  const allActiveLi = stackList.querySelectorAll(".active")
  const lastActiveLi = allActiveLi[allActiveLi.length-1]
  // console.log(lastActiveLi) test
  lastActiveLi.classList.add('inactive')
  lastActiveLi.classList.remove('active')
  lastActiveLi.innerHTML = ''
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
