const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = ""
};

const renderListStack = () => {
  for (let i = 0; i < 10; i++) {
    const listitem = document.createElement('li');
    listitem.setAttribute('class', 'inactive')
    stackList.appendChild(listitem);
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.textContent = "Stack Underflow"

    setInterval(() => {
      warningTopStack.style.display = 'none';
    }, 5000)

  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.textContent = "Stack Overflow"

    setInterval(() => {
      warningTopStack.style.display = 'none';
    }, 5000)
  }
};

let contadorAdd = 0;


const addToStack = () => {

  if (event.target.id == 'add-stack' && newStack.canPush()) {


    let item = stackList.children.item(contadorAdd);

    if (stackInput.value) {
      item.innerText = stackInput.value;
      clearStackInput()
    }
    item.classList.remove('inactive')
    item.setAttribute('class', 'active')
    newStack.push(`box[${contadorAdd}]`);

    console.log(`box[${contadorAdd}]`)
    contadorAdd++;


  } else if (!newStack.canPush() && event.target.id == 'add-stack') {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  if (event.target.id === 'take-stack' && !newStack.isEmpty()) {
    let item = stackList.children.item(newStack.stackControl.length - 1);
    item.textContent = "";


    item.classList.remove('active')
    item.setAttribute('class', 'inactive')

    newStack.pop();

    contadorAdd--;

  } else if (event.target.id === 'take-stack' && newStack.isEmpty()) {
    generateWarningStack('underflow');
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
