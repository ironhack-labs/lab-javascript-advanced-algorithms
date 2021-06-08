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
  stackInput.value = ''
};

const renderListStack = () => {
  //rellenar los cuadraos gris => azules
  const stackArr = newStack.display()
  const liItems = document.querySelectorAll('.list-stack li')
  console.log(liItems)

  liItems.forEach((element, index) => {
    if (stackArr.length < index) {
      element.className = 'active'
    }
  });


  // ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
  //generar el error en el dom
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  try {
    renderListStack()
    // ... your code goes here
  } catch (error) {
    console.log(error, "el error")
    // there was an overflow error, handle it
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
