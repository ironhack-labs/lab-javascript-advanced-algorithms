const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {

  stackInput.value = ""

};

const renderListStack = () => {

  for (let i = 0; i < newStack.MAX_SIZE; i++) {

    let li = document.createElement("li")
    li.classList = "inactive"
    stackList.appendChild(li)

  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "block"
    warningBottomStack.style.textAlign = "center"
    warningBottomStack.innerText = "Underflow"
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block"
    warningTopStack.style.textAlign = "center"
    warningTopStack.innerText = "Overflow"
  }
};

const addToStack = () => {
  // ... your code goes here
};

const removeFromStack = () => {
  // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
