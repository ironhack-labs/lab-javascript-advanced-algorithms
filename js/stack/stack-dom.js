const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');


const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');




const stackSize = 10
const newStack = new StackDataStructure(stackSize);



const clearStackInput = () => {
stackInput.value = ""
}





const renderListStack = () => {
  // ... your code goes here



};

renderListStack();






const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
   
   warningBottomStack.style.display = "underflow"
   warningBottomStack.innerText = type;



  } else if (type === 'overflow') {
    // ... your code goes here
 
    warningTopStack.style.display = "underflow"
    warningTopStack.innerText = type
  }
};

const addToStack = () => {
  // ... your code goes here
 // if (newStack.canPush)
 if (newStack.push(stackInput.value) === 'Stack Overflow') {
  generateWarningStack('overflow');
} else {
  clearStackInput();
  renderListStack();
}




};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('underflow');
  } else {
    renderListStack();
  }

};



addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack)
