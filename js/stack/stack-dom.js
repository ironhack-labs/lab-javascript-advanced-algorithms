const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value=""
};

const renderListStack = () => {
  for(let i=0;i<newStack.MAX_SIZE;i++){
    let li= document.createElement("li")
    li.classList="inactive"
    stackList.appendChild(li)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display="block"
    warningBottomStack.style.textAlign="center"
    warningBottomStack.innerText="Underflow"
  } else if (type === 'overflow') {
    warningTopStack.style.display="block"
    warningTopStack.style.textAlign="center"
    warningTopStack.innerText="Overflow"
  }
};

const addToStack = () => {
  
  warningBottomStack.style.display="none"
  warningTopStack.style.display="none"
  if(newStack.push(stackInput.value) === 'Stack Overflow') generateWarningStack('overflow')
  
  else{
    let lista = stackList.querySelectorAll('#stack-list li') 
    lista[newStack.stackControl.length-1].classList.add('active')
    lista[newStack.stackControl.length-1].classList.remove('inactive')
    lista[newStack.stackControl.length-1].innerText = stackInput.value
  }
  clearStackInput()
  
}

const removeFromStack = () => {
  warningBottomStack.style.display="none"
  warningTopStack.style.display="none"
  if(newStack.pop()==='Stack Underflow') generateWarningStack('underflow')
  else{
  let lista= stackList.querySelectorAll('#stack-list li')
  lista[newStack.stackControl.length].classList.remove("active")
  lista[newStack.stackControl.length].classList.add("inactive")
  lista[newStack.stackControl.length].innerText=""
}
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

