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

const renderListStack = () => {
  // ... your code goes here
  let count = 0
  if (newStack.stackControl.length > 0) {
    
      document.querySelectorAll('li').forEach(elm => {
          elm.remove()
      })
      newStack.stackControl.forEach(elm => {
        let li = document.createElement('li')
        li.classList.add('container')
        li.classList.add('active')
        stackList.appendChild(li)
        count++
      })
      
      for (let i = count; i < 10; i++){
        let li = document.createElement('li')
        li.classList.add('container')
        li.classList.add('inactive')
        stackList.appendChild(li)
      }
    if (newStack.stackControl.length == 10) {
      let li = document.createElement('li')
      li.classList.add('container')
      li.classList.add('warning-top')
      li.innerHTML = "Overflow"
      stackList.appendChild(li)
      console.log("pie")
      }
    
    
  }
  else {
    document.querySelectorAll('li').forEach(elm => {
      elm.remove()
    })
    for (let i = 0; i < 10; i++){
      let li = document.createElement('li')
      li.classList.add('container')
      li.classList.add('inactive')
      stackList.appendChild(li)
    }
  }
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
  // ... your code goes here
  if(newStack.canPush)
    newStack.push(newStack)
  renderListStack()
};

const removeFromStack = () => {
  // ... your code goes here
  if(newStack.isEmpty)
    newStack.pop(newStack)
  renderListStack()
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
