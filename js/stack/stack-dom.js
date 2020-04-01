const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById("stack-input");
const container = document.getElementById("container");
const warningTopStack = document.querySelector("#stack-container .warning-top");
const warningBottomStack = document.querySelector(
  "#stack-container .warning-bottom"
);
const addStackBtn = document.getElementById("add-stack");
const takeStackBtn = document.getElementById("take-stack");

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = " ";
};

const renderListStack = () => {
  let listBlocks;

  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    listBlocks = document.createElement("li");
    listBlocks.classList.add("inactive");
    stackList.appendChild(listBlocks);
  }
};

renderListStack({ warningBottomStack });

const generateWarningStack = type => {
  if (type === "underflow") {
    warningBottomStack.innerHTML = "underflow";
    warningBottomStack.style.display = "block";
  } else if (type === "overflow") {
    warningTopStack.innerHTML = "overflow";
    warningBottomStack.style.display = "block";
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    newStack.push(stackInput.value);
    let newActive = (document.querySelectorAll("li").innerHTML =
      stackInput.value);

    //newActiveArray[] //DEBO SELECCIONAR LA FILA INACTIVA MAS BAJA
    console.log(newActiveArray);

    clearStackInput();
  } else {
    generateWarningTopStack;
  }
};
const removeFromStack = () => {
  if (newStack.isEmpty()) {
    generateWarningBottomStack;
  }
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);

console.log(document.querySelector("#stack-input").innerHTML);
