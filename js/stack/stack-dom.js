const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

// CLEAR DE INPUT FIELD
const clearStackInput = () => {
    stackInput.value = ''
};

// CREATE DE STACK LIST
const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
  const newListStack = document.createElement('li')
  newListStack.setAttribute('class', 'inactive')
  stackList.appendChild(newListStack)
  }
};

// GENERATE WARNINGS
const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block'
    warningBottomStack.innerText = type
    
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block'
    warningTopStack.innerText = type
  }
};

// ADD ITEMS 
const addToStack = () => {

  warningBottomStack.style.display = 'none'
  warningTopStack.style.display = 'none'

 // Check if add is possible, and if it's not, generate warning
 if (newStack.push(stackInput.value) === 'Stack Overflow') {

   generateWarningStack('overflow')
 
  } else {
 
 // Select the new item and change the class and content
 const listItems = document.querySelectorAll('#stack-list li')
 const indexLastItem = newStack.stackControl.length - 1
 listItems[indexLastItem].classList.add('active')
 listItems[indexLastItem].classList.remove('inactive')
 listItems[indexLastItem].innerText = stackInput.value

}

 // Call the clear function 
 clearStackInput()

};

// REMOVE ITEMS
const removeFromStack = () => {

  warningBottomStack.style.display = 'none'
  warningTopStack.style.display = 'none'

  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('underflow')

  } else {

  // Select the last item and change the class and content
  const listItems = document.querySelectorAll('#stack-list li')
  const indexLastItem = newStack.stackControl.length 

  listItems[indexLastItem].classList.remove('active')
  listItems[indexLastItem].classList.add('inactive')
  listItems[indexLastItem].innerText = ''
  
 }

};

// EXECUTION
renderListStack();
addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
