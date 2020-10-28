const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = " "
};

const renderListStack = () => {
  const newStack1 = document.createElement('li')
  newStack1.setAttribute('class', 'inactive')
  const newStack2 = document.createElement('li')
  newStack2.setAttribute('class', 'inactive')
  const newStack3 = document.createElement('li')
  newStack3.setAttribute('class', 'inactive')
  const newStack4 = document.createElement('li')
  newStack4.setAttribute('class', 'inactive')
  const newStack5 = document.createElement('li')
  newStack5.setAttribute('class', 'inactive')
  const newStack6 = document.createElement('li')
  newStack6.setAttribute('class', 'inactive')
  const newStack7 = document.createElement('li')
  newStack7.setAttribute('class', 'inactive')
  const newStack8 = document.createElement('li')
  newStack8.setAttribute('class', 'inactive')
  const newStack9 = document.createElement('li')
  newStack9.setAttribute('class', 'inactive')
  const newStack10 = document.createElement('li')
  newStack10.setAttribute('class', 'inactive')
  stackList.appendChild(newStack1)
  stackList.appendChild(newStack2)
  stackList.appendChild(newStack3)
  stackList.appendChild(newStack4)
  stackList.appendChild(newStack5)
  stackList.appendChild(newStack6)
  stackList.appendChild(newStack7)
  stackList.appendChild(newStack8)
  stackList.appendChild(newStack9)
  stackList.appendChild(newStack10)
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
  if (newStack.canPush()) {
    for (i = 0; i < newStack.stackControl.length; i++) {
      const activeStack = document.createElement('li')
      activeStack.setAttribute('class', 'active')
      document.querySelectorAll('ul')[0].appendChild(activeStack)
      const elimStack = document.querySelectorAll('li')[i]
      document.querySelectorAll('ul')[0].removeChild(elimStack)
    }
  } else {
    generateWarningStack
  }
};

const removeFromStack = () => {
  // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
