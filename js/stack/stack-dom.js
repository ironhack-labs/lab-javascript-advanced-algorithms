const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput=""
};

const renderListStack = () => {
  
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

  
    stackList.forEach(function (elm) {
      elm.onclick = function () {
        const newRow = document.createElement('li')
        const row = document.createTextNode('Nuevo item')
        newRow.appendChild(row)
      }
 
  }

}

const removeFromStack = () => {

  const removeRow = document.querySelectorAll('li')[0]
        document.querySelector('ul').removeChild(removeRow)

};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
