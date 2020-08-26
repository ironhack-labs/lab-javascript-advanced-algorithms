const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

// LIMPIAR INPUT CUANDO HACES CLICK ADD TO STACK
const clearStackInput = () => {
  // TRAER EL INPUT --> stackInput
  // value = ""
};

// PINTAR LAS LISTAS DEL STACK comprobando su máx 
const renderListStack = () => {

  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    let li = document.createElement('li');
    li.classList.add('inactive')
    stackList.appendChild(li)

  }

};

renderListStack();

// DAR LOS AVISOS
const generateWarningStack = type => {
  if (type === 'underflow') {
    // PINTAR AVISOS
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

// AÑADE UN NUEVO ELEMENTO AL STACK
const addToStack = () => {

  if (newStack.stackControl.length < newStack.MAX_SIZE) {
    let inactiveArr = document.querySelectorAll('.inactive')
    let lastInactive = inactiveArr[0]
    newStack.push(lastInactive)
    lastInactive.classList.remove('inactive')
    lastInactive.classList.add('active')

  }


  // Pintar la ultima fila de azul
  // TRAER LA ULTIMA FILA y CAMBIARLE LA CLASE            

  // if (canpus) {
  //   newStack.push()
  // }


};

// REMOVE DEL STACK
const removeFromStack = () => {
  if (!newStack.isEmpty()) {
    // TRAER LA PRIMERA FILA Y CAMBIARLE LA CLASE
    let activeArr = document.querySelectorAll('.active')
    let firstActive = activeArr[activeArr.length - 1]
    firstActive.classList.remove('active')
    firstActive.classList.add('inactive')

  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

















  // if (newStack.display().length > 0) {

  //   let li = document.createElement('li');
  //   li.className.add = 'container'
  //   li.classList.add('active')
  //   stackList.appendChild(li)

  // } else if (newStack.display().length == 0) {
  //   for (i = 0; i < 10; i++) {
  //     let li = document.createElement('li');
  //     li.className = 'container'
  //     li.classList.add('inactive')
  //     stackList.appendChild(li)
  //   }
  // }

  // console.log(newStack.display().length)