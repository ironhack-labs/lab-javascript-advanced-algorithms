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
    warningBottomStack.style.display = 'block'
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block'
  }
}

const addToStack = () => {
  const inactiveStackElements = document.querySelectorAll('.inactive')
  const canPush = newStack.canPush()

  if (!canPush) {
    generateWarningStack('overflow')
  } else {
    if (warningBottomStack.style.display == 'block') {
      warningBottomStack.style.display = 'none'
    }
    inactiveStackElements[0].innerHTML = 'test'
    inactiveStackElements[0].classList.remove('inactive')
    inactiveStackElements[0].classList.add('active')
    newStack.push('test')
  }
}

const removeFromStack = () => {
  const activeStackElements = document.querySelectorAll('.active')
  const isUnderflow = newStack.isEmpty()

  if (isUnderflow) {
    generateWarningStack('underflow')
  } else {
    if (warningTopStack.style.display == 'block') {
      warningTopStack.style.display = 'none'
    }
    activeStackElements[activeStackElements.length - 1].innerHTML = ''
    activeStackElements[activeStackElements.length - 1].classList.remove(
      'active'
    )
    activeStackElements[activeStackElements.length - 1].classList.add(
      'inactive'
    )
    newStack.pop()
  }
}

addStackBtn.addEventListener('click', addToStack)
takeStackBtn.addEventListener('click', removeFromStack)
