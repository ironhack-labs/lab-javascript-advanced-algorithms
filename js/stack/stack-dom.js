const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
const newStack = new StackDataStructure();



const clearStackInput = () => {
  stackInput.value ='' 
};

const renderListStack = () => {
 let htmlStack = ''

 for (let i = 0; i < newStack.MAX_SIZE; i++) {
   htmlStack += '<li class="inactive"></li>'
 }

 stackList.innerHTML = htmlStack
 
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block'
    warningBottomStack.classList.add('btn')
    warningBottomStack.innerText = 'underflow'

  } else if (type === 'overflow') {

    warningTopStack.style.display = 'block'
    warningTopStack.classList.add('btn')
    warningTopStack.innerText = 'overflow'
  }
};

const addToStack = () => {
  if (newStack.push(stackInput.value) === 'Stack Overflow') {
    generateWarningStack('overflow')
  } 
  else {
    let targetLiAdd = document.querySelector(`#stack-list .inactive`)
    
    targetLiAdd.innerText = stackInput.value
    
    targetLiAdd.classList.replace('inactive', 'active')
    
    clearStackInput()

    warningBottomStack.style.display = 'none'
  }
  //Coger valor de input. Pasar push con valor de input a stackControl
  //Togglear la clase a active del li (stackControl.length-1)th child y 
  //Poner el valor de input en innertext de
};

const removeFromStack = () => {
  if (newStack.pop(stackInput.value) === 'Stack Underflow') {
    generateWarningStack('underflow')
  }
  else {  
    newStack.stackControl.pop()

    let targetLiRemove = document.querySelectorAll(`#stack-list .active`)
    let indexTargetLiRemove = targetLiRemove.length - 1
    // Aquí cogemos todos los li .active y buscamos el índice del último
    targetLiRemove[indexTargetLiRemove].innerText = ''

    targetLiRemove[indexTargetLiRemove].classList.replace('active', 'inactive')

    warningTopStack.style.display = 'none'
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
