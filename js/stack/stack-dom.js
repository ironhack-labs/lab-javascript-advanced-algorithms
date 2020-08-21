const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = "";  
};

const renderListStack = () => {
  while (stackList.firstChild) {
    stackList.removeChild(stackList.firstChild);
  }

  if(!newStack.isEmpty()){
    stackList.innerHTML = newStack.display();
    generateWarningStack("")
    
    if (!newStack.canPush()) 
      generateWarningStack("overflow")
  }
  else  
    generateWarningStack("underflow")  
};

const generateWarningStack = type => {
    if (type === 'underflow') {
    takeStackBtn.disabled = true;
    takeStackBtn.innerHTML = "Cant Remove More"
    
  } else if (type === 'overflow') {
    
    addStackBtn.disabled = true;
    addStackBtn.innerHTML = "Cant Add More"
  }
  else{
    addStackBtn.disabled = false;
    addStackBtn.innerHTML = "Add to stack"
    takeStackBtn.disabled = false;
    takeStackBtn.innerHTML = "Remove from stack"
  }
};

const addToStack = () => {
  if(stackInput.value.trim() != "")
  {
    newStack.push(stackInput.value)
    clearStackInput()
    renderListStack();
  }
};

const removeFromStack = () => {
  newStack.pop()
  renderListStack();
};

renderListStack();
addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
