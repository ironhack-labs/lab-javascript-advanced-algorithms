const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const buttonRemove = document.querySelector('#take-stack')

const buttonAdd = document.querySelector('#add-stack')



console.log(newStack)



//menos importante, limpia el input
const clearStackInput = () => {

  
  


};

//pinta las cajas despus de cada add o pop
const renderListStack = () => {

  
};

renderListStack();

//saca el mensaje de alerta
const generateWarningStack = type => {
  if (type === 'underflow') {
    
   

  } else if (type === 'overflow') {
   
  
  }
};

//añade al stack
const addToStack = () => {

  buttonAdd.onclick = () =>{
   const addStack = document.querySelectorAll(".inactive")
   addStack[0].classList.replace("inactive", "active") 

}

};

const removeFromStack = () => {

  buttonRemove.onclick = () =>{
    const removeStack = document.querySelectorAll("li")
    removeStack.classList.remove("active")
    removeStack.classList.add("inactive")

  }

  
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
