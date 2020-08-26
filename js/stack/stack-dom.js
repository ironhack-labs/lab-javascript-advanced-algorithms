const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {

  stackInput.value = []

};

const renderListStack = () => {

  for (let i = 0; i < 10; i++) {
    const element = 10[i];

    const newSlot = document.createElement('li')
    newSlot.classList.toggle('inactive')
    stackList.appendChild(newSlot)

  }

};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {

  const textToAdd = stackInput.value

  // We can add the item
  if (newStack.push(textToAdd) !== 'Stack Overflow') {

    // If we're adding the first element we hide the bottom warning
    if (newStack.stackControl.length === 1) {

      warningBottomStack.style.display = 'none'
      warningBottomStack.textContent = ''

    }

    // We store the item we want to "diplay" into the DOM
    const itemsAmount = newStack.stackControl.length
    const targetItem = stackList.childNodes[itemsAmount - 1]

    // We "display" it
    targetItem.classList.remove('inactive')
    targetItem.classList.add('active')
    targetItem.textContent = textToAdd

    clearStackInput()

  } else {

    // If stack is full we display the top warning
    warningTopStack.style.display = 'block'
    warningTopStack.textContent = 'overflow'

  }

};

const removeFromStack = () => {

  // If we can remove the element
  if (newStack.pop() !== 'Stack Underflow') {

    // If stack is full when we remove we hide the warning even if is already hide
    if (newStack.stackControl.length + 1 === newStack.MAX_SIZE) {

      warningTopStack.style.display = 'none'
      warningTopStack.textContent = ''

    }

    // We store the element we have to "remove" from the DOM
    const lastItem = stackList.childNodes[newStack.stackControl.length]

    lastItem.classList.remove('active')
    lastItem.classList.add('inactive')

    lastItem.textContent = ""

  } else {  // If we cannot, means that the stack is empty so we display the bottom warning

    warningBottomStack.style.display = 'block'
    warningBottomStack.textContent = 'underflow'

  }
};

// Listeners
addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
