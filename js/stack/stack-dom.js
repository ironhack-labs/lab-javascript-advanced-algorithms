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
  stackInput.value = "";
};

const renderListStack = () => {
  // ... your code goes here
  warningBottomStack.style.display = "none";
  warningTopStack.style.display = "none";
  let newList = "";
  newStack.stackControl.forEach(function (e) {
    newList += `<li class="active">${e}</li>`;
  })

  for (let i = newStack.stackControl.length; i < newStack.MAX_SIZE; i++) {
    newList += `<li class="inactive"></li>`;
  }
  stackList.innerHTML = newList;
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.textContent = "Underflow";
    warningBottomStack.style.display = "block";

  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.textContent = "Overflow";
    warningTopStack.style.display = "block";
  }
};

const addToStack = () => {
  // ... your code goes here
  if (newStack.canPush()) {
    newStack.push(stackInput.value);
    clearStackInput();
    renderListStack();
  } else {
    generateWarningStack("overflow");
  }
};

const removeFromStack = () => {
  // ... your code goes here
  if (!newStack.isEmpty()) {
    newStack.pop();
    renderListStack();
  } else {
    generateWarningStack("underflow");
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);