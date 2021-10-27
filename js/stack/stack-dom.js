const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
const stackResult = document.getElementById("stack-result")

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
};

const renderListStack = () => {
  // ... your code goes here
  const print = newStack.display()

  print.forEach(element => {
    if(print.length>0){
      stackResult.innerHTML += `<br/><span>${element}</span>`

    }else{

      stackResult.innerHTML += `<br/><span>${element}</span>`
    }
  });
  console.log("Stak :", print);

};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {

  try {
    // ... your code goes here
    newStack.push(stackInput.value)


  } catch (error) {
    // there was an overflow error, handle it
  }
  renderListStack();
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
