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
  const textBox = document.getElementById('stack-input');
  textBox.value = null;
};

const renderListStack = () => {
  const stackList = document.getElementById('stack-list');
  stackList.innerHTML = '';
  for(i = 0; i < newStack.stackControl.length; i++) {
    const newDiv = document.createElement('li');
    newDiv.className = 'block';
    const stackList = document.getElementById('stack-list');
    stackList.append(newDiv);
  } 
};

renderListStack();

const clearWarnings = () => {
  const warnings = document.getElementById('stack-container').getElementsByClassName('alert');
  warnings[0].style.display = 'none';
  warnings[1].style.display = 'none';
};

const generateWarningStack = (type) => {
  if (type.message === 'STACK_UNDERFLOW') {
      const warningCallout = document.getElementById('stack-container').getElementsByClassName('warning-bottom')[0];
      warningCallout.style.display = 'block';
      warningCallout.innerText = 'STACK UNDERFLOW';
      setTimeout(clearWarnings, 2000);
  } else if (type.message === 'STACK_OVERFLOW') {
    const warningCallout1 = document.getElementById('stack-container').getElementsByClassName('warning-top')[0];
      warningCallout1.style.display = 'block';
      warningCallout1.innerText = 'STACK OVERFLOW';
      setTimeout(clearWarnings, 2000);
   }
};

const addToStack = () => {
  try {
    let newElementName = document.getElementById('stack-input').value;
    const newDiv = document.createElement('li');
    newDiv.className = 'block';
    newDiv.innerHTML = `<p>${newElementName}</p>`;
    newStack.push(newElementName);
    const stackList = document.getElementById('stack-list');
    stackList.append(newDiv);
    clearStackInput();
  } catch (error) {
    generateWarningStack(error);
  }
};

const removeFromStack = () => {
  try {
    newStack.pop();
    renderListStack();
  } catch (error) {
    generateWarningStack(error);
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
