const stackInput = document.getElementById('stack-input')
const addStackBtn = document.getElementById('add-stack')
const takeStackBtn = document.getElementById('take-stack')
const warningTopStack = document.querySelector('#stack-container .warning-top')
const stackList = document.getElementById('stack-list')
const warningBottomStack = document.querySelector('#stack-container .warning-bottom')



const stackSize = 10
const newStack = new StackDataStructure(stackSize)



const clearStackInput = () => {
  // ... your code goes here
stackInput.value = ""
}



const renderListStack = () => {
  // ... your code goes here
  warningTopStack.style.display = 'none'
  warningBottomStack.style.display = 'none'
  stackList.innerHTML = '';

  let largo = newStack.display().length
  let tamaño = stackSize - largo

  newStack.display().forEach(item => {
    let li = document.createElement('li')
    li.className = 'active'
    li.innerText = item
    stackList.appendChild(li)
  });

  
  for (let i = 0; i < tamaño; i++) {
    let li = document.createElement('li')
    li.className = 'inactive'
    li.innerHTML = ''
    stackList.appendChild(li)
  }
};

renderListStack();




const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
  warningBottomStack.innerText = type
  warningBottomStack.style.display = "block"
  


  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerText = type
    warningTopStack.style.display = "block"
   
  }
};



const addToStack = () => {
  // ... your code goes here
 // if (newStack.canPush)
 if (newStack.push(stackInput.value) === 'Stack Overflow') {
  generateWarningStack('overflow')
} else {
  clearStackInput()
  renderListStack()
}

};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('underflow')
  } else {
    renderListStack()
  }
};



addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
