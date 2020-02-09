const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById("stack-input");
const container = document.getElementById("container");
const warningTopStack = document.querySelector("#stack-container .warning-top");
const warningBottomStack = document.querySelector("#stack-container .warning-bottom");
const addStackBtn = document.getElementById("add-stack")
const takeStackBtn = document.getElementById("take-stack")

const stackSize= 10;
const newStack = new StackDataStructure(stackSize);

const clearStackInput = () => {
  stackInput.value = "";
};

const renderListStack = () => {
  warningTopStack.style.display = "none";
  warningBottomStack.style.display = "none";
  stackList.innerHTML = "";
  let length = newStack.display().length;
  let size = stackSize - length;
  newStack.display().forEach(item => {
    let li = document.createElement("li");
    li.className = "active";
    li.innerText = item;
    stackList.appendChild(li);
  });
  for (let i = 0; i < size; i++){
    let li = document.createElement("li");
    li.className = "inactive";
    li.innerHTML = '&nbsp;';
    stackList.appendChild(li);
  }
};
renderListStack();
 
const generateWarningStack = type => {
  if(type === "underflow") {
    warningBottomStack.style.display = "block"
    warningBottomStack.innerText = type;
  }else if(type === "overflow") {
    warningTopStack.style.display = "block"
    warningTopStack.innerText = type
  }
}

const addStack = () => {
  if(newStack.push(stackInput.value) === -1){
    generateWarningStack("overflow")
  } else {
    clearStackInput();
    renderListStack();
  }
}

const takeStack = () => {
  if(newStack.pop() === -1) {
    generateWarningStack("underflow")
  } else {
    renderListStack();
  }
}

addStackBtn.addEventListener('click', addStack)
takeStackBtn.addEventListener('click', takeStack)
