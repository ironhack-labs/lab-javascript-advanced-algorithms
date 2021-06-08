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
///en algun momento le hago push a este newStack de los items que van entrando y pop y todo eso 


const clearStackInput = () => {
  // ... your code goes here
  //vacia el texto del input
};

const renderListStack = () => {
  //pinta de azul las cajas que estan llenas
  const stackInput = document.getElementById('stack-input');
  //classList que cambia el nmbre de la clase incactive por active 

  //query selectors etc

  // ... your code goes here
};

renderListStack();

const generateWarningStack = (type) => {
  //pinta la alerta de overflow y underflow
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  //añade un elemento al newstack
  try {

    renderListStack()
    push(inputValueAddStack)



    // ... your code goes here
  } catch (error) {
    // insertar en el div el mensaje que ya esta creado y quitar display none
  }
};

const removeFromStack = () => {
  //lo elimina
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
