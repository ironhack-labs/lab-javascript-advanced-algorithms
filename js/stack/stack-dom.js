const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {

  const activeStack = document.querySelectorAll('.list-stack .active')
  const i = activeStack.length-1;
  // console.log(activeStack.length-1)
  if (i <10){
    // console.log(activeStack[i])
    
      activeStack[i].className = 'inactive';
      activeStack[i].innerText = '';
      
  };
};

const renderListStack = () => {
  console.log(newStack.stackControl.length)
  const stack = document.querySelectorAll('.list-stack .inactive')
  const i = newStack.stackControl.length-1;
  // console.log(stack)
  // console.log(newStack.stackControl.length-1)
  if (i <10){
    // console.log(stack[i])
    
      stack[i].className = 'active';
      stack[i].innerText = stackInput.value;
      
  };
    
};

// renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block'
    warningBottomStack.innerText = 'underflow'
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block'
    warningTopStack.innerText = 'overflow'
  }
  
};

const addToStack = () => {
 
  if (newStack.canPush){
    warningBottomStack.style.display = 'none'
    newStack.push()
    // console.log(newStack.stackControl.length)
    renderListStack()
  } else {
    generateWarningStack('overflow')
  }
};

const removeFromStack = () => {
  // console.log('hello')
  if (newStack.isEmpty() === true){
    generateWarningStack('underflow')
  } else{
    newStack.pop()
    clearStackInput()
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
