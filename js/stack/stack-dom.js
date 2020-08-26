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
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
  stackList.innerHTML = '';
  let length = newStack.display().length;
  let size = 10 - length;

  newStack.display().forEach(item => {     // Crea un tag li por cada elemento que se meta en del array
    let li = document.createElement('li');
    li.innerHTML = item;
    li.className = 'active';
    stackList.appendChild(li);   // Este metodo agrega un nodo alfinal de la lista de un elemento hijo de un elemeto padre especif.
  });
  
  for (let i = 0; i < size ; i++) {   // Crea el tag li segun la longitud del array (arr size = 10)
    let li = document.createElement('li');
    li.className = 'inactive';
    stackList.appendChild(li);
  }

}

renderListStack();

const generateWarningStack = type => {
  if (type === 'Stack Underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = type;
  } else if(type === 'Stack Overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerText = type;
  }
};

const addToStack = () => {
  if (newStack.push(stackInput.value) === 'Stack Overflow') {
    generateWarningStack('Stack Overflow');
  } else {
    clearStackInput();
    renderListStack();
  }
};

const removeFromStack = () => {
  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('Stack Underflow');
  } else {
    renderListStack();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);