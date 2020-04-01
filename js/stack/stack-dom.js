const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

// Unnecessary
// const clearStackInput = () => {
//   // ... your code goes here
// };

const renderListStack = () => {
  let liElement
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    
    liElement = document.createElement("li")
    liElement.className = "inactive"
    stackList.appendChild(liElement)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    
    warningBottomStack.innerHTML = type
    warningBottomStack.style.display = "block"
    
  } else if (type === 'overflow') {
    
    warningTopStack.innerHTML = type
    warningTopStack.style.display = "block"
  }
};

const addToStack = () => {
  
  if (newStack.canPush()) {

    warningBottomStack.style.display = "none"

    let stackInputValue = stackInput.value
    let stackDOMArray = stackList.querySelectorAll("li")

    stackDOMArray[newStack.stackControl.length].innerHTML = stackInputValue
    stackDOMArray[newStack.stackControl.length].classList.toggle("inactive")
    stackDOMArray[newStack.stackControl.length].classList.toggle("active")

    newStack.push(stackInputValue)
    // He sustituido la llamada a la función "clearStackInput (line 12) por la siguiente línea:"
    stackInput.value = ""

  } else {
    generateWarningStack("overflow")
  }
};

const removeFromStack = () => {

  if (!newStack.isEmpty()) {

    warningTopStack.style.display = "none"

    let stackDOMArray = stackList.querySelectorAll("li")
    stackDOMArray[newStack.stackControl.length - 1].innerHTML = ""
    stackDOMArray[newStack.stackControl.length - 1].classList.toggle("active")
    stackDOMArray[newStack.stackControl.length - 1].classList.toggle("inactive")

    newStack.pop()
    
  } else {
    generateWarningStack("underflow")
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
