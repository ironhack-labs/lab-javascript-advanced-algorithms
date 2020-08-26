const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
 stackInput.value = "";
};

const renderListStack = (arg) => {
  
  console.log(newStack.stackControl)
    if(newStack.stackControl.length > 0 && arg !=1 )
    {
      
      let li = document.querySelector('li')
      li.className = "container"
      li.classList.add("active");
       stackList.appendChild(li)
    
    }else if (newStack.stackControl.length  == 0){
      for ( i = 0; i < 10; i++){
        let li = document.createElement('li')
        li.className = "container"
        li.classList.add("inactive");
        stackList.appendChild(li)
      } 
      }else if(arg == 1)
      {

        let li = document.createElement('li')
        li.className = "container"
        li.classList.add("inactive");
        warningBottomStack.appendChild(li)
        
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
   
  if(newStack.canPush())
    newStack.push(newStack)
  renderListStack(2)
};

const removeFromStack = () => {
 
  if(newStack.isEmpty())
   newStack.pop()
    renderListStack(1)
    
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
