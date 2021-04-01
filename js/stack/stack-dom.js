const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById("stack-input");
const container = document.getElementById("container");
const warningTopStack = document.querySelector("#stack-container .warning-top");
const warningBottomStack = document.querySelector("#stack-container .warning-bottom");
const addStackBtn = document.getElementById("add-stack");
const takeStackBtn = document.getElementById("take-stack");

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = "";
};

const renderListStack = () => {
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const newLi = document.createElement("li");
    newLi.classList.toggle("inactive");
    stackList.appendChild(newLi);
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === "underflow") {
    warningBottomStack.innerHTML = "underflow";
    warningBottomStack.style.display = "block";
  } else if (type === "overflow") {
    warningTopStack.innerHTML = "overflow";
    warningTopStack.style.display = "block";
  } else {
    warningTopStack.style.display = "none";
    warningBottomStack.style.display = "none";
  }
};

const addToStack = () => {
  let add = newStack.push(stackInput.value);
  let listInactive = stackList.querySelectorAll(".inactive");
  if (add === `Stack Overflow`) {
    generateWarningStack("overflow");
  } else {
    generateWarningStack();
    listInactive[0].innerHTML = stackInput.value;
    listInactive[0].classList.toggle("active");
    listInactive[0].classList.toggle("inactive");
  }
  clearStackInput();
};

const removeFromStack = () => {
  let remove = newStack.pop();
  let listActive = stackList.querySelectorAll(".active");
  if (remove === `Stack Underflow`) {
    generateWarningStack("underflow");
  } else {
    listActive[listActive.length - 1].innerHTML = "";
    listActive[listActive.length - 1].classList.toggle("inactive");
    listActive[listActive.length - 1].classList.toggle("active");
    generateWarningStack();
  }
  clearStackInput();
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);