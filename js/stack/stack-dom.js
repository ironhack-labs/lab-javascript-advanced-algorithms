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

const renderListStack = () => {
  for(let i = 0; i<=newStack.MAX_SIZE; i++){
    const listEl = document.createElement('li')
    listEl.setAttribute("class", "inactive")
    stackList.append(listEl)
    }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "block";
    warningBottomStack.innerHTML = "Underflow"
    setTimeout(()=>{
      warningBottomStack.style.display = "none";
      warningBottomStack.innerHTML = ""
    }, 1000)
  } else if (type === 'overflow') {
    warningTopStack.style.display = "block";
    warningTopStack.innerHTML = "Overflow"
    setTimeout(()=>{
      warningTopStack.style.display = "none";
      warningTopStack.innerHTML = ""
    }, 1000)
  } 
};

const addToStack = () => {
  const listArr= document.querySelectorAll(".list-stack .inactive");
  let item = stackInput.value;

  if(newStack.canPush()){
    newStack.push(item)
      listArr[0].classList.remove('inactive')
      listArr[0].classList.add('active')
      listArr[0].innerHTML = item;
  } else {
    generateWarningStack('overflow')
  }
  clearStackInput()
};

const removeFromStack = () => {
  const listArr= document.querySelectorAll(".list-stack .active");

  if(!newStack.isEmpty()){
    newStack.pop()
      listArr[listArr.length-1].classList.remove('active')
      listArr[listArr.length-1].classList.add('inactive')
      listArr[listArr.length-1].innerHTML = "";
  } else {
    generateWarningStack('underflow')
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
