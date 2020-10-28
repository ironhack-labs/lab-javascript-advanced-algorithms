const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = ''
};

const renderListStack = () => {

  let html = '';
  for (let i = 0; i < newStack.stackControl.length; i++) {
    html += `<li class="active"></li>`;
  }
  //create inactive stack element
  for (let i = 0; i < newStack.MAX_SIZE - newStack.stackControl.length; i++) {
    html += `<li class="inactive"></li>`;
  }

  // Add all the li to the HTML in the ul stackList
  stackList.innerHTML = html;

};
renderListStack();


const generateWarningStack = type => {

  if (type === 'underflow') {

    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = 'Underflow';

  } else if (type === 'overflow') {


    warningTopStack.style.display = 'block';
    warningTopStack.innerText = 'Overflow';

  }
};

const addToStack = () => {

  if (newStack.push(stackInput.value) === 'Stack Overflow') {

    generateWarningStack('overflow');

  } else {
    clearStackInput();
    renderListStack();
  }
};

const removeFromStack = () => {

  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('underflow');

  } else {
    clearStackInput();
    renderListStack();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
