const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const theList = document.querySelectorAll('#stack-list .inactive')
const eachElementList = [...theList]

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    !newStack.pop()
    return "Cuidado, no se puede sacar de donde no hay"
  } else if (type === 'overflow') {
    !newStack.push()
    return 'Me encantaría pero estoy llena'
  }
};

const addToStack = () => {
   if(newStack.push(item)) {
    eachElementList.forEach(elm => {
      elm.classList.replace("inactive", "active")
      return newStack.display().reverse();
    })
   }

  try {
    newStack.push()
  } catch (error) {
    
  }
};

const removeFromStack = () => {
  if(newStack.pop()) {
    eachElementList.forEach(elm => {
      elm.classList.replace("active", "inactive")
      return newStack.display();
    })
  try {
    
  } catch (error) {
    
  }
};

addStackBtn.addEventListener('click', () => {
  
});

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
