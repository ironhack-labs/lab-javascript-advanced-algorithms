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

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.setAttribute("style", "display:inline;");
    console.log(warningBottomStack)
    // ... your code goes here
    
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  // ... your code goes here
  //console.log(stackList)
  document.querySelector(".list-stack .inactive").classList.add("active")
  document.querySelector(".list-stack .inactive").classList.remove("inactive")
  // console.log(warningBottomStack)


};

const removeFromStack = () => {
  // ... your code goes here
  const item = document.querySelectorAll(".list-stack .active")
  item[item.length-1].classList.add("inactive")
  item[item.length-1].classList.remove("active")


  // console.log(document.querySelectorAll(".list-stack .active")[1])
  // document.querySelector(".list-stack .active").classList.add("inactive")
  // document.querySelector(".list-stack .active").classList.remove("active")


};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
