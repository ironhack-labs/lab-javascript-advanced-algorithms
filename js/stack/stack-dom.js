const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    let newElem = document.createElement('li');
    newElem.setAttribute('class', 'inactive');
    stackList.appendChild(newElem);
  }
  

};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerHTML = 'underflow';
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerHTML = 'overflow';
  }
};

const addToStack = () => {  
  
  let elemPos = 0;

  if (!newStack.canPush()) {
    generateWarningStack('overflow');
  } else {
    warningTopStack.style.display = 'none';
  }
  
  if (stackInput.value === null || stackInput.value === undefined) {
    clearStackInput();
  }

  newStack.stackControl.push(stackInput.value);
  //The position on which the element should be
  elemPos = newStack.stackControl.length - 1;

  stackList.children[elemPos].setAttribute('class','active');
  stackList.children[elemPos].innerHTML = stackInput.value;
  clearStackInput();

  //underflow warning must not show unless necessary.
  warningBottomStack.style.display = 'none';
};

const removeFromStack = () => {

  let elemPos = 0;

  //overflow warning must not show unless necessary.
  warningTopStack.style.display = 'none';

  if (newStack.isEmpty()) {
    generateWarningStack('underflow');
  } else {
    warningBottomStack.style.display = 'none';
  }


  newStack.pop();
  elemPos = newStack.stackControl.length;

  stackList.children[elemPos].innerHTML = '&nbsp;';
  stackList.children[elemPos].setAttribute('class','inactive');

};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
