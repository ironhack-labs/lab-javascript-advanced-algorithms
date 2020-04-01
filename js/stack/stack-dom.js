const stackList = document.getElementById('stack-list')
const stackInput = document.getElementById('stack-input')
const container = document.getElementById('container')
const warningTopStack = document.querySelector('#stack-container .warning-top')
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
)
const addStackBtn = document.getElementById('add-stack')
const takeStackBtn = document.getElementById('take-stack')
const stackTemplate = document.querySelector('#stack-list > .template')

const newStack = new StackDataStructure()

const clearStackInput = () => {
  stackInput.value = ''
}

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const stackNode = stackTemplate.cloneNode()
    stackNode.classList = 'stack-element inactive'
    stackList.append(stackNode)
  }
}

renderListStack()

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block'
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block'
    clearStackInput()
  }
}

const addToStack = () => {
  const inactiveStackElements = document.querySelectorAll('.stack-element.inactive')
  const canPush = newStack.canPush()

  if (!canPush) {
    generateWarningStack('overflow')
  } else {
    if (warningBottomStack.style.display == 'block') {
      warningBottomStack.style.display = 'none'
    }
    inactiveStackElements[0].innerHTML = stackInput.value
    inactiveStackElements[0].classList.remove('inactive')
    inactiveStackElements[0].classList.add('active')
    newStack.push(stackInput.value)
    clearStackInput()
  }
}

const removeFromStack = () => {
  const activeStackElements = document.querySelectorAll('.stack-element.active')
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
