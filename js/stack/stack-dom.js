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
  //Se generan los 'tiles' de las posiciones de la pila y se les añade un id identificativo
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const item = document.createElement('li')
    item.classList.add('inactive')
    item.id = `item${i + 1}`
    stackList.appendChild(item)
  }
};

renderListStack();

//Se activan los mensajes de 'underflow' y 'overflow'
const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block'
    warningBottomStack.innerHTML = newStack.pop(type)
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block'
    warningTopStack.innerHTML = newStack.push(type)
  }
};

const addToStack = () => {
  //Se comprueba que haya sitio
  if (newStack.canPush()) {
    //Si está el warning de underflow visible se oculta
    if (warningBottomStack.style.display === 'block') {
      warningBottomStack.style.display = 'none'
    }

    //Se añade al array del objeto StackDataStructure
    newStack.push(stackInput.value)
    //Se reinicia el input de texto
    clearStackInput()
    //Se refleja en el html cambiando las clases e incluyendo texto
    const newItem = stackList.querySelector(`#item${newStack.stackControl.length}`)
    newItem.className = 'active'
    newItem.innerHTML = newStack.stackControl[newStack.stackControl.length - 1]

  } else generateWarningStack("overflow")

};

const removeFromStack = () => {
  //Se comprueba que no esté vacío
  if (!newStack.isEmpty()) {
    //Si está el warning de overflow se elimina
    if (warningTopStack.style.display === 'block') {
      warningTopStack.style.display = 'none'
    }
    //Se refleja en el dom que se quita un elementif
    const newItem = stackList.querySelector(`#item${newStack.stackControl.length}`)
    newItem.className = 'inactive'
    newItem.innerHTML = ''
    //Se saca el elemento ultimo del stack
    newStack.pop()
  } else generateWarningStack("underflow")
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
