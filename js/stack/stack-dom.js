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
    // Create the stack with the max size of the stack
    for (let i = 1; i <= newStack.MAX_SIZE; i++) {
      let li = document.createElement("li")
      li.className = "inactive"
      stackList.appendChild(li)
    }

}

renderListStack();

const generateWarningStack = type => {
  //Generate the warnings when an underflow or overflow is generate
  if (type === 'underflow') {
    warningBottomStack.style.display = "block"
    warningBottomStack.innerText = "underflow"
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block"
    warningTopStack.innerText = "overflow"
  }
};


const addToStack = () => {
  if (newStack.canPush()) {
    // Add a new stack
    let input = stackInput.value
    newStack.push(input)
    let liList = document.querySelectorAll("#stack-list li")    
    // Select all the li elements and change the class only in the stack added
    for (let i = 0; i <= newStack.display() - 1; i++) {
      liList[i].classList.add("active")
      liList[i].classList.remove("inactive")
    }
    liList[newStack.display()-1].innerText = input
    clearStackInput()
  } else {
    // When an overflow ocurrs, show the message
    return generateWarningStack(newStack.push(newStack.display()))
  }
  // To clear the message of overflow when the stack can be push again
  if (!newStack.isEmpty()) {
    warningBottomStack.style.display = "none"
  }

};

const removeFromStack = () => {

  if (!newStack.isEmpty()) {
    // Remove the last stack
    newStack.pop()
    if (newStack.canPush()) {
      // Remove the last stack if the li's are listed
      let liList = document.querySelectorAll("#stack-list li")
      liList[newStack.display()].classList.remove("active")
      liList[newStack.display()].classList.add("inactive")
      liList[newStack.display()].innerText = ""
      clearStackInput()
    }
  } else {
    // When an underflow ocurrs, show the message
    return generateWarningStack(newStack.pop())
  }
  // To clear the message of underflow when the stack is not empty
  if (!newStack.canPush()) {
    warningTopStack.style.display = "none"
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
