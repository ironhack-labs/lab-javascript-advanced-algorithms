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
  //Limpia el textinput donde se pone el text que irá dentro del stack
  stackInput.value = ''

};

const renderListStack = () => {
  // ... your code goes here

  //Oculatr ambos warning  los warning, el superior y el inferior...
  warningTopStack.style.display = 'none'
  warningBottomStack.style.display = 'none'

    //generar 10 bloques grises...
  let howMuchGreyBars = newStack.display().length
  


};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {

    warningBottomStack.style.display = 'block';

    warningBottomStack.innerText = type;

  } else if (type === 'overflow') {

    // ... your code goes here
    warningTopStack.style.display = 'block';

    warningTopStack.innerText = type;
  }
};

const addToStack = () => {
  // ... your code goes here
 
  if (addStack == 'Stack Overflow'){
    generateWarningStack('overflow')

  }else{
  
  //a quién llamo?  a renderListStack?...????
    
  }


};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.pop() == 'Stack Underflow'){
    
    generateWarningStack('underflow')

  }else{
  
  //a quién llamo?  a renderListStack?...OTRA VEZ....????
    
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
