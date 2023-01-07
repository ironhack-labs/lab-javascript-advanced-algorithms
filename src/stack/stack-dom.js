const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const sContainer = document.getElementById('col-sm-4');
const warningTopStack = document.querySelector('.stack-top-alert');
const warningBottomStack = document.querySelector('.stack-bottom-alert');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  
  stackList.innerHTML = '';
  let length = newStack.display().length;
  let size = newStack.MAX_SIZE - length;
  newStack.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    stackList.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    stackList.appendChild(li);
  }
};
renderListStack();

function generateWarningStack(type) {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerText = type;
  }
};

const addToStack = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
  try{
  newStack.push(stackInput.value)
  clearStackInput();
  renderListStack();  
  }  
  catch(error){
    console.log(`there was an overflow error, handle it`);
    generateWarningStack('overflow');
  }
     

};

const removeFromStack = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
  try{
    newStack.pop()  
    renderListStack();
  } 
  catch(error){
    console.log(`there was an underflow error, handle it`);
    generateWarningStack('underflow');
  }
    
  }
 

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);