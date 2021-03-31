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

renderListStack();


//--------------------------o--------------------------

 
const generateWarningStack = type => {
 
  if (type === 'underflow') {
    warningBottomStack.innerHTML = type
    warningBottomStack.className = 'alert alert-danger'



  } else if (type === 'overflow') {
    warningTopStack.innerHTML = type
    warningTopStack.className = 'alert alert-danger'
  }

};

//--------------------------o--------------------------

const addToStack = () => {


};

const removeFromStack = () => {



  // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
