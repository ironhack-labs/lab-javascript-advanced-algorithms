const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

// const stackMax = 10;

const newStack = new StackDataStructure();

const clearStackInput = () => {

  // stackInkput = ''

  // ... your code goes here
};

const renderListStack = () => {

  // stackList.innerHTML = document.classList.remove('Remove from stack')
  // stackList.innerHTML = document.classList.add('Add to stack')
  // ... your code goes here
};

renderListStack();

// const generateWarningStack = type => {
//   if (type === 'underflow') {
//     // ... your code goes here
//   } else if (type === 'overflow') {
//     // ... your code goes here
//   }


const addToStack = () => {
  // document.querySelector('li').style.background = 'blue'
  const newTarget = document.createElement('li')

  newTarget.setAttribute('class', 'product')
  document.querySelector('.name span').textContent = newProduct
  document.querySelector('.price span').textContent = newPrice


  let xxxx = document.querySelectorAll('li')

  xxxx.forEach(elm => {
    elm.style.background = 'blue'
    elm.innerText = 'Este texto no es el incial :3'
  })
  newStack.push();



};

const removeFromStack = () => {
  document.querySelector('body').style.background = 'red'
  // ... your code goes here
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);