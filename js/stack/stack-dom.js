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
  for (i=0; i<newStack.MAX_SIZE; i++) {
    stackList.innerHTML += `<li class="inactive">&nbsp;</li>`
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML = `underflow`
    warningBottomStack.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopStack.innerHTML = `overflow`
    warningTopStack.style.display = 'block';
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    stackList.querySelector('.inactive').innerHTML = stackInput.value;
    stackList.querySelector('.inactive').classList.add("active");
    stackList.querySelector('.inactive').classList.remove("inactive")
    clearStackInput();
    newStack.push(stackInput.value)
    if (!newStack.isEmpty()) {
      warningBottomStack.style.display = 'none';
    }
  } else {
    generateWarningStack('overflow')
  }
};

const removeFromStack = () => {
  if (newStack.isEmpty()) {
    generateWarningStack('underflow')
  } else {
    stackList.querySelectorAll('.active')[(stackList.querySelectorAll('.active')).length-1].innerHTML = '';
    stackList.querySelectorAll('.active')[(stackList.querySelectorAll('.active')).length-1].classList.add("inactive");
    stackList.querySelectorAll('.active')[(stackList.querySelectorAll('.active')).length-1].classList.remove("active")
    newStack.pop()
    if (newStack.canPush()) {
      warningTopStack.style.display = 'none';
    }
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
