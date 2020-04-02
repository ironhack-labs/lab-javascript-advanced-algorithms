const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = " "
};

const renderListStack = () => {
  //Con esta funcion genero las cajas grises inactivas de la lista,
  //además les asigno la clase "inactive" y les añado una id para identificarlas.

  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    // ... your code goes here
    const liItem = document.createElement('li')
    liItem.classList.add('inactive')
    liItem.id = `item${i + 1}`
    stackList.appendChild(liItem)
  }

};

renderListStack();
//Con esta funcion se activan los mensajes de 
//"Stack Overflow" y "Stack Underflow"

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here    
    warningBottomStack.innerHTML = newStack.pop(type)
    warningBottomStack.style.display = 'block'
    

  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.style.display = 'block'
    warningTopStack.innerHTML = newStack.push(type)

  }
};

const addToStack = () => {
  // ... your code goes here
    //Comprobamos con la funcion del ejercicio de lógica,
    //si existe espacio en el array.

  if (newStack.canPush()) {
    
    //Oculto el mensaje del warning "Satck Underflow" visible

   warningBottomStack.style.display = 'none'
    

    //Añado al array del objeto StackDataStructure
    // el elemento stackinput con el valor asignado
    
    newStack.push(stackInput.value)

    //Llamamo a la funcion que reinicia el input de texto
    
    clearStackInput()

    //Se refleja en el html cambiando las clases e incluyendo texto

    const newLiItem = stackList.querySelector(`#item${newStack.stackControl.length}`)
    newLiItem.className = 'active'
    newLiItem.innerHTML = newStack.stackControl[newStack.stackControl.length - 1]

  } else {

    generateWarningStack("Stack Overflow")

  } 
      
};

const removeFromStack = () => {
  // ... your code goes here

  //Comprobamos con la funcion del ejercicio de lógica,
    //si el array esta vacío.

  if (!newStack.isEmpty()) {

    //Eliminamos el mensaje overflow
    
    warningTopStack.style.display = 'none'
    
    //Quitamos el elmento li del DOM
    const newLiItem = stackList.querySelector(`#item${newStack.stackControl.length}`)
    newLiItem.className = 'inactive'
    newLiItem.innerHTML = ''

    //Con el metodo .pop() quitamos el ultimo elemento del objetop satck data structure
    newStack.pop()

  } else {
    
    //Generamos el mensaje "Underflow" si el array esta vacio.
    generateWarningStack("underflow")

  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
