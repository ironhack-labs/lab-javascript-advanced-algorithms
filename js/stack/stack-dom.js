const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  
  stackInput.value = ''

};

const renderListStack = () => {
  
  const stackControlArray = newStack.display().length

  // Know the free spaces of the array
  const realLength = newStack.MAX_SIZE - stackControlArray
  
  newStack.display().forEach(element => {

    // Create element
    const newLiStack = document.createElement('li');

    // Class assign
    newLiStack.className = 'active';

    // Add new element to li 
    stackList.appendChild(newLiStack);

  });


  for (let i = 0; i < realLength; i++) {

    // Create element
    const newLiStack = document.createElement('li')

    // Class assign
    newLiStack.className = 'inactive'

    // Add new element to ul stackList
    stackList.appendChild(newLiStack)

  }

};

renderListStack();

const generateWarningStack = type => {

  if (type === 'underflow') {

    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = type;

  } else if (type === 'overflow') {

    warningTopStack.style.display = 'block';
    warningTopStack.innerText = type;

  }
};

const addToStack = () => {

  const newPush = newStack.push(stackInput.value)

  if (newPush === 'Stack Overflow') {

    generateWarningStack('overflow');

  } else {

    clearStackInput()
    renderListStack()

  }

};

const removeFromStack = () => {
  
  const newPush = newStack.pop()

  if (newPush === 'Stack Underflow') {

    generateWarningStack('underflow');

  } else {

    clearStackInput()
    renderListStack()

  }

};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
