/* creacion */
const newStack = document.createElement('li')
newStack.setAttribute('class', 'inactive')

const text = document.createTextNode('Nuevo item')
newStack.appendChild(text)


/*const removeStack = document.querySelectorAll('li')[0]
document.querySelector('.list-stack').removeChild(removeStack)*/
        



const listStack = []


const stackList = document.querySelectorAll('.list-stack li')

const buttonAdd = document.querySelector('#add-stack')

buttonAdd.onclick = function () {
  listStack.push(1)
  console.log(listStack)
  document.querySelector('.list-stack').appendChild(newStack)
}



/*const buttonRemove = document.querySelector('#take-stack')

buttonAdd.onclick = function () {
  listStack.pop()
  console.log(listStack)
  document.querySelector('.list-stack').appendChild(removeStack)
}*/








/*const stackList = document.getElementById('stack-list');
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
  stackInput.Value = ""
};

const renderListStack = () => {
  // ... your code goes here
  
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
  } catch (error) {
    // there was an overflow error, handle it
  }
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
*/