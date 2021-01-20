const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

let counter = 0;
let type = '';

const clearStackInput = () => {
};

const renderListStack = () => {
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.setAttribute("style", "display:block;");
  } 
  else if (type === 'overflow') {
    warningTopStack.setAttribute("style", "display:block;");
  }
  else {
    warningBottomStack.setAttribute("style", "display:none;");
    warningTopStack.setAttribute("style", "display:none;");
  }
};

const addToStack = () => {
  if (counter === 10) {
    type = "overflow"
  } else {
    type = ""
  }
  generateWarningStack(type)

  if(counter < 10){
    counter ++
    document.querySelector(".list-stack .inactive").classList.add("active")
    document.querySelector(".list-stack .inactive").classList.remove("inactive")
  }
};

const removeFromStack = () => {
  if (counter === 0) {
    type = "underflow"
  } else {
    type = ""
  }
  generateWarningStack(type)

  if(counter !== 0) {
  counter--
  const item = document.querySelectorAll(".list-stack .active")
  item[item.length-1].classList.add("inactive")
  item[item.length-1].classList.remove("active") 
  }

};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
