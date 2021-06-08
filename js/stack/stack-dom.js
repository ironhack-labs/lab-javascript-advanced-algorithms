const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const lis = document.querySelectorAll('.list-stack > li')
// console.log(lis)
// lis.forEach( el => el.className='active')

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  setTheActiveElements(newStack)
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    console.log('STACK_OVERFLOW')
  } else if (type === 'overflow') {
    console.log('STACK_UNDERFLOW')
  }
};

const addToStack = () => {
  try {
    const newElement = stackInput.value;
    newStack.stackControl.push(newElement)
    renderListStack(newStack)
    clearStackInput()
  } catch (error) {
    alert(error)
  }
};

const removeFromStack = () => {
  try {
    newStack.pop()
    renderListStack(newStack)
  } catch (error) {
    alert(error)
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

function setTheActiveElements(stack){
  lis.forEach( el => el.className='inactive')
  for(let i = 0; i < stack.stackControl.length; i++ ){
    // try{
      lis[i].className='active'
      lis[i].textContent=stack.stackControl[i];
      console.log(i)
    // }catch(err){
    //   alert(err)
    // }

  }
}