const stackList = document.getElementById('stack-list')
const stackInput = document.getElementById('stack-input')
const container = document.getElementById('container')
const warningTopStack = document.querySelector('#stack-container .warning-top')
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
)
const addStackBtn = document.getElementById('add-stack')
const takeStackBtn = document.getElementById('take-stack')

const newStack = new StackDataStructure()

const clearStackInput = () => {
  // ... your code goes here
}

const renderListStack = () => {
  // ... your code goes here
}

renderListStack()

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    console.log("overflow")
  }
}

const addToStack = () => {
  const stackElements = document.querySelectorAll('.inactive')
  const isOverflow = newStack.canPush()
  if (!isOverflow) {
    generateWarningStack('overflow')
  } else {
    stackElements[0].innerHTML = "test"
    stackElements[0].classList.remove("inactive")
    stackElements[0].classList.add("active")
    newStack.push("test")
  }
}

const removeFromStack = () => {
  // ... your code goes here
}

addStackBtn.addEventListener('click', addToStack)
takeStackBtn.addEventListener('click', removeFromStack)
