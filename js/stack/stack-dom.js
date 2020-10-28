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
  // ... your code goes here
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  // addStackBtn.addEventListener("click", (e) => {
  if (newStack.canPush()) {
      newStack.stackControl.push('a')
    const lista = document.querySelector('#stack-list .inactive');
    lista.innerHTML = stackInput.value
    stackInput.value = ""
      // clearStackInput()
    lista.classList = 'active'
  } else {
    alert('está lleno')
    }
// })
};

const removeFromStack = () => {
  if (newStack.canpop() != 'Stack Underflow') {
    const lista = document.querySelectorAll('#stack-list .active');
    lista[lista.length - 1].classList = 'inactive'
    lista[lista.length - 1].innerHTML = ""
    
  } else {
    alert('Está vacío')
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
