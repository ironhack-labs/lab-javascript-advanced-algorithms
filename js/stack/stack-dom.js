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
};

const renderListStack = () => {
  // ... your code goes here
  for(let i=0;i<newStack.MAX_SIZE;i++){
    stackList.innerHTML+='<li class="inactive"></li>';
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.innerHTML="underflow";
    warningBottomStack.style.display="block";
    setTimeout(() => warningBottomStack.style.display="none" ,3000);
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerHTML="overflow";
    warningTopStack.style.display="block";
    setTimeout(() => warningTopStack.style.display="none" ,3000);
  }
};

const addToStack = () => {
  try {
    // ... your code goes here
    if(stackInput.value){
      newStack.push(stackInput.value);
      const firstInactive = document.querySelector("#stack-list .inactive");
      firstInactive.className="active";
      firstInactive.innerHTML=stackInput.value;
      stackInput.value="";
    }  
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningStack("overflow");
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
    newStack.pop();
    const elementsActive = document.querySelectorAll("#stack-list .active");
    const lastActive = elementsActive[elementsActive.length-1];
    lastActive.className="inactive";
    lastActive.innerHTML="";
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningStack("underflow");
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
