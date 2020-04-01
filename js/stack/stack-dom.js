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
    console.log('underflow')
  } else if (type === 'overflow') {
    console.log('overflow')
  }
}

const addToStack = () => {
  const inactiveStackElements = document.querySelectorAll('.inactive')
  const canPush = newStack.canPush()

  if (!canPush) {
    generateWarningStack('overflow')
  } else {
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
