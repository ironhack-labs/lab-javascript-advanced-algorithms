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
  // ... your code goes here
  ///??????
};

const renderListStack = () => {
  // ... your code goes here
  ///??????
};

renderListStack();
//NO SE COMO FUNCIONA EL TRY--CATCH!!!(8'''''O)
const generateWarningStack = (type) => {
  if (type === 'underflow') {
    const divWarningUvf = document.getElementById("warning-bottom")
    divWarningUvf.style.display = 'block';
    divWarningUvf.textContent = 'UNDERFLOW'// ... your code goes here
  } else if (type === 'overflow') {
    const divWarningOvf = document.getElementById("warning-top")
    divWarningOvf.style.display = 'block';
    divWarningOvf.textContent = 'OVERFLOW'// ... your code goes here
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    console.log(newStack.canPush());
    console.log("I'm adding stack")
    const liStack = document.createElement('li')
    liStack.className = 'active'
    stackList.appendChild(liStack)
    console.log(newStack.canPush())
    newStack.push()
  }
  else if (!newStack.canPush()) {
    // if(canPush() === false){
    console.log('this is false:     ', newStack.canPush());
    // const divWarningOvf = document.getElementById("warning-top")
    // divWarningOvf.style.display = 'block';
    // divWarningOvf.textContent= 'OVERFLOW'
    generateWarningStack('overflow')

  }
  //  generateWarningStack('overflow') // there was an overflow error, handle it
}


const removeFromStack = () => {
  if (!newStack.isEmpty()) {//Code wins--Luca lose--- I tried, so hard-- como pueder salir esto???
    console.log("I'm removing stack")
    const liStack = document.querySelector('#stack-list li')
    stackList.removeChild(stackList.lastElementChild)
    newStack.pop() // ... your code goes here
  } else if (newStack.isEmpty()) {
    generateWarningStack('underflow')
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
