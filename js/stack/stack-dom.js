const stackList = document.getElementById('stack-list')
const stackInput = document.getElementById('stack-input')
const container = document.getElementById('container')
const warningTopStack = document.querySelector('#stack-container .warning-top')
const warningBottomStack = document.querySelector('#stack-container .warning-bottom')
const addStackBtn = document.getElementById('add-stack')
const takeStackBtn = document.getElementById('take-stack')

const newStack = new StackDataStructure()

const clearStackInput = () => {
  stackInput.value = ''
}

const renderListStack = () => {
  for (let i = 0; i < stackList.querySelectorAll('.active').length; i++) {            // Lo siento por el "for" Teo, pero no se otra manera de atacar a la vez los mismos elementos de dos arrays diferentes
    stackList.querySelectorAll('.active')[i].innerHTML = newStack.stackControl[i]
  }
  stackList.querySelectorAll('.inactive').forEach(elm => {
    elm.innerHTML = ''
  })
}

renderListStack()

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML = type
    warningBottomStack.className = 'alert alert-danger'
  } else if (type === 'overflow') {
    warningTopStack.innerHTML = type
    warningTopStack.className = 'alert alert-danger'
  }
}

const addToStack = () => {
  if (newStack.canPush()) {
    if (newStack.isEmpty()) {
      warningBottomStack.className = "warning-top alert alert-danger"
    }
    newStack.push(stackInput.value)
    stackList.querySelector('.inactive').className = 'active'
    renderListStack()
    clearStackInput()
  } else {
    generateWarningStack('overflow')
    clearStackInput()
  }
}

const removeFromStack = () => {
  if (!newStack.isEmpty()) {
    if (!newStack.canPush()) {
      warningTopStack.className = "warning-bottom alert alert-danger"
    }
    newStack.stackControl.pop()
    stackList.querySelectorAll('.active')[stackList.querySelectorAll('.active').length - 1].className = 'inactive'
    renderListStack()
  } else {
    generateWarningStack('underflow')
  }
}

addStackBtn.addEventListener('click', addToStack)
takeStackBtn.addEventListener('click', removeFromStack)