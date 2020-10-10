const stackList = document.getElementById('stack-list'); //The total group of lis
const stackInput = document.getElementById('stack-input'); //The 
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();



const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "block";
    warningBottomStack.innerHTML = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block";
    warningTopStack.innerHTML = type;
  }
};

const addToStack = () => {
  const elementToChange = stackList.getElementsByClassName('inactive')[0]
  if (newStack.canPush()) {
    warningTopStack.style.display = "none"
    warningBottomStack.style.display = "none"
    newStack.push(stackInput.value);
    elementToChange.innerHTML = stackInput.value;
    elementToChange.setAttribute('class','active');
    stackInput.value = "";
  } else {generateWarningStack('overflow')}
};

const removeFromStack = () => {
  const elementToChange = stackList.getElementsByClassName('active')[stackList.getElementsByClassName("active").length-1];
  if (!newStack.isEmpty()) {
    warningTopStack.style.display = "none";
    warningBottomStack.style.display = "none"
    newStack.pop();
    elementToChange.innerHTML = "";
    elementToChange.setAttribute('class','inactive')
  } else {generateWarningStack('underflow')}
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
