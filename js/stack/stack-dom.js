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
  stackInput.value = ''
};

const renderListStack = () => { //// aqui no se muy bien que hacer, creo que funcionaria algo con for y un querySelectorAll ligado al id de stack-list
  // ... your code goes here
  
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes    
    warningBottomStack.style.display = 'block'
    warningBottomStack.innerHTML = 'Stack Underflow'
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.style.display = 'block'
    warningTopStack.innerHTML = 'Stack Overflow'
  }
};

const addToStack = () => {     //// Teo creo que aqui va algo parecido a lo que tengo pero no me funciona por el renderListStack
  // ... your code goes here
 if (newStack.push(stackInput.value) === 'Stack Overflow') {
   generateWarningStack('overflow')
 } else {  
   renderListStack()
 }
  
};

const removeFromStack = () => {  //// aqui igual que lo de arriba
  // ... your code goes here
  if (newStack.pop() === 'Stack Underflow'){
    generateWarningStack('underflow')
  } else {
    renderListStack()
  }

};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
