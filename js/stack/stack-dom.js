const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();
console.log(newStack)
const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ''
};


const active = newStack.stackControl
const renderListStack = () => {
  // ... your code goes here
  clearStackInput()
  stackList.innerHTML= ''
  
  let inactiveSize = newStack.MAX_SIZE - active.length
  
  //for(let i = 0; i < activeSize; i++){
    

    active.forEach(item =>{

    let stackItm = document.createElement('li')
    stackItm.innerText = item
    stackItm.className = 'active'
    stackList.appendChild(stackItm)

    })
    
  
 

  for (let i = 0; i < inactiveSize; i++) {
    let inactive = document.createElement('li');
    inactive.className = 'inactive';
    inactive.innerHTML = '';
    stackList.appendChild(inactive);
  }
  
  
};

renderListStack()


const generateWarningStack = type => {
  if (type === 'underflow') {
    
    // ... your code goes here
    warningBottomStack.style.display= 'block'
    warningBottomStack.innerText= newStack.pop()

  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.style.display= 'block' 
    warningTopStack.innerText= newStack.push()
    

  }
};

const addToStack = () => {
  // ... your code goes here
 
  newItem = stackInput.value
  //newStack.push(newItem)
  
  if(active.length == 10){
    
    generateWarningStack('overflow')
  }else{ 
    newStack.push(newItem)
  }
   
  renderListStack()

};





const removeFromStack = () => {
  // ... your code goes here
  
  if(active.length == 0){
    generateWarningStack('underflow')
  }else{ 
    newStack.pop()
  }
   
  renderListStack()
  console.log(newStack.stackControl)
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
