const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();



const clearStackInput = () => {
  // stackInput =
};


const renderListStack = () => {
  for (i = 0; i < newStack.MAX_SIZE; i++){
    let stackLi = document.createElement("li")
    stackList.appendChild(stackLi)
    //console.log({stackLi})
    stackLi.classList.toggle("inactive")
  }  };


renderListStack();


const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = "flex" //
    warningBottomStack.innerHTML = "Stack Underflow"
  } else if (type === 'overflow') {
    warningTopStack.style.display = "flex" //dudo de qué poner en el display
    warningTopStack.innerHTML = "Stack Overflow"
  }
};


const addToStack = () => {
  warningBottomStack.style.display =''
  //if(newStack.push()) === false) {
    //generateWarningStack('overflow')
  //} else {
    //for ( i =0; i <= newStack.stakControl.length -1; i++){
      //let li = document.querySelectorAll('li')
      //li[i].classList.add('active')
      //li[i].classList.remove('inactive')
  //  }
  //}
}


const removeFromStack = () => {
  warningTopStack.style.display = ''
 // if(newStack.pop === false) {
   // generateWarningStack('underflow')
  // else {
    //for (i=0; i<= newStack.stackControl.length; i++)
    //No sé cómo seguir!!!!
  
};



addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
