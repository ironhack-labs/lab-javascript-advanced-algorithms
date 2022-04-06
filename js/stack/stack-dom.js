const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = ''
};

const renderListStack = () => {
 
  stackList.innerHTML = '';
  let contentArr = newStack.display();
  let currentSize = newStack.MAX_SIZE - contentArr.length;

  contentArr.forEach(content =>{
    let li = createLi()
    li.innerHTML = content;
    li.classList.toggle('active') 
  });

  for(let i = 0 ; i < currentSize ; i++ ){
    createLi() 
  };

  function createLi(){
   let  li = document.createElement('li');
    li.classList.toggle('inactive') ;
    stackList.appendChild(li);
    return li
  }

  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerHTML = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerHTML = type;
  }
};

const addToStack = () => {
  try {
     newStack.push(stackInput.value);
     clearStackInput();
     renderListStack();
  }  catch (error) {
    generateWarningStack('overflow');
  }
}

const removeFromStack = () => {
  try {
    newStack.pop();
    renderListStack();
  } catch (error) {
    generateWarningStack('underflow');
  }
 
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
