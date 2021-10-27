const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');



const gaps= document.querySelectorAll(".list-stack li");

const newStack = new Stack();

const clearStackInput = () => {
console.log("He entrado en clear")
stackInput.value = "";
  // ... your code goes here
};

const renderListStack = () => {




  // ... your code goes here
};


if (newStack.canPush()) {warningTopStack.style.display = "block";}


const generateWarningStack = (type) => {
    








  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  try {
    let valueInput = stackInput.value;
        
        gaps[newStack.stackControl.length].textContent =valueInput
        gaps[newStack.stackControl.length].className = "active";
        newStack.push("");
        
    stackInput.value = "";
    // ... your code goes here
  } catch (error) {
    
    // there was an overflow error, handle it
  }
}

const removeFromStack = () => {
  try {
    // ... your code goes here

    gaps[newStack.stackControl.length-1].textContent ="";
    gaps[newStack.stackControl.length-1].className = "inactive";
    newStack.pop();




  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
