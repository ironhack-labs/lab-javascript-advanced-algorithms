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
};

const renderListStack = () => {
  // ... your code goes here
};

// renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {

  if(newStack.canPush()) {

    const itemToChange = document.querySelector('li.inactive')
    console.log(itemToChange)
    newStack.display(itemToChange)
    newStack.push(itemToChange)
    console.log(newStack.stackControl)

  } else {
    const itemOverflow = document.createElement('li')
    itemOverflow.className = 'overflow'
    itemOverflow.textContent = 'Warning Overflow'
    document.querySelector('ul.list-stack').appendChild(itemOverflow)
    newStack.push(itemOverflow)
    console.log(newStack.stackControl)
  }

};

const removeFromStack = () => {

    const itemToRemove = newStack.stackControl[newStack.stackControl.length - 1]
     
  if (newStack.stackControl.length <= newStack.MAX_SIZE && newStack.stackControl.length > 0) {
      console.log(itemToRemove)
      itemToRemove.className = 'inactive'
      newStack.stackControl.pop(itemToRemove)
     }
    else if (newStack.stackControl.length > newStack.MAX_SIZE) {
    itemToRemove.remove()
    newStack.stackControl.pop(itemToRemove)
    console.log(newStack.stackControl)
    } 
    else {
    const itemUnderflow = document.createElement('li')
    itemUnderflow.className = 'overflow'
    itemUnderflow.textContent = 'Warning Underflow'
    const parentNode = document.querySelector('ul.list-stack')
    parentNode.insertBefore(itemUnderflow, parentNode.firstChild)
    newStack.unshift(itemUnderflow)
    console.log(newStack.stackControl)
    console.log(itemToRemove)
    }
};

addStackBtn.addEventListener('click', addToStack);
// addStackBtn.addEventListener('click', Overflow);

takeStackBtn.addEventListener('click', removeFromStack);
