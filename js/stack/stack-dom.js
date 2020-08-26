const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {

  stackInput.value = 0
  
};

const renderListStack = () => {

  for (i = 0; i < newStack.MAX_SIZE; i++) {
    const li = document.createElement('li')
    li.setAttribute('class', 'inactive')
    stackList.appendChild(li)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.innerHTML = 'Underflow'
    warningBottomStack.style.display  = 'block'

  } else if (type === 'overflow') {
    warningTopStack.innerHTML = 'Overflow'
    warningTopStack.style.display = 'block'

  }
};


const addToStack = () => {
  let input = stackInput
  newStack.push(input)
  console.log("HOla")
  
  let allLi = document.querySelectorAll('li')
  
  if (newStack.canPush() === false) {
    generateWarningStack('overflow')

  } else {
    for (let i = 0; i <= newStack.stackControl.length - 1; i++) {
      allLi[i].classList.add('active')
      allLi[i].classList.remove('inactive')
      allLi[i].innerHTML = input.value
    }
    warningBottomStack.style.display = 'none'
  }

};

  const removeFromStack = () => {
  
    let input = stackInput
    newStack.pop(input)
    let allLi = document.querySelectorAll('li')
    
    if (newStack.isEmpty() === true) {
      generateWarningStack('underflow')
      
    } else {
    for (let i = 0; i <= newStack.stackControl.length - 1; i++) {
      allLi[i].classList.add('inactive')
      allLi[i].classList.remove('active')
      allLi[i].clearStackInput
    }
      warningTopStack.style.display = 'none'

    
  }

    

};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
