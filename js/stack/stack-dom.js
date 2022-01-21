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

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = "";

};

const renderListStack = () => {
  // ... your code goes here
  stackList.innerHTML="";
  let stackItem;

  for (let i=0;i<newStack.MAX_SIZE;i++){

    stackItem = document.createElement("li");
    if (newStack.stackControl[i]!==undefined) {
       stackItem.innerHTML = newStack.stackControl[i];
       stackItem.setAttribute("class","active");
    } else {
      stackItem.setAttribute("class","inactive"); 
  }
  stackList.appendChild(stackItem);
    }
  
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.innerHTML="underflow";
    warningBottomStack.style.display="block";

  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerHTML="overflow";
    warningTopStack.style.display = 'block';
  }
};

const addToStack = () => {
  try {
   // ... your code goes here

      warningBottomStack.style.display="none";

   
    newStack.push(stackInput.value);
    
    renderListStack();
    clearStackInput();

  } catch (error) {
    // there was an overflow error, handle it
    generateWarningStack("overflow");
    

  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
    warningTopStack.style.display="none";
    newStack.pop();
    renderListStack();
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningStack("underflow")

  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
