const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');



const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
};

let array = []
window.addEventListener('load', event => {
  let maxElements = newStack.MAX_SIZE;
  let renderListStack = ""
  let wrapper = ("#stack-list")
  console.log($(wrapper))
  for (let i = 1; i <= maxElements; i++) {
    renderListStack += $(wrapper).append('<li class="inactive"></li>');
  }

  let list = document.querySelectorAll("#stack-list li")
  array = [...list]
  warningBottonStack.style.display = 'none';
});


const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerText = type;
  }
};


const addToStack = () => {
  let isOverFlow = newStack.push()
  if (isOverFlow != 'Stack Overflow') {
    let itemName = stackInput.value
    let nodePosition = newStack.stackControl.length - 1
    let node = array[nodePosition]
    node.innerHTML = itemName
    node.classList.toggle("active")
    stackInput.value = "" // clean value
  } else {
    generateWarningStack('overflow')
  }
  warningBottomStack.style.display = 'none';
  //warningTopStack.style.display = 'none';
};

const removeFromStack = () => {
  let isUnderFlow = newStack.pop()
  if (isUnderFlow != 'Stack Underflow') {

    let nodePosition = newStack.stackControl.length//array.length - newStack.stackControl.length
    let node = array[nodePosition]
    node.classList.toggle("active")
    node.innerHTML = ""
  } else {
    generateWarningStack('underflow')
  }
  warningTopStack.style.display = 'none';
  //warningBottomStack.style.display = 'none';
}

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
