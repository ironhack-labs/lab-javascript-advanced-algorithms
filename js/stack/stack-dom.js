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
  // ... your code goes here
  const li = stackList.querySelectorAll(".inactive");
  li[0].textContent = "";
};

const renderListStack = () => {
  // ... your code goes here
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const li = document.createElement("li");
    li.classList.add("inactive");
    stackList.appendChild(li);
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === "underflow") {
    // ... your code goes here
    warningBottomStack.style.display = "block";
    warningBottomStack.innerHTML = newStack.display();
    console.log(newStack.display());
  } else if (type === "overflow") {
    // ... your code goes here
    warningTopStack.style.display = "block";
    warningTopStack.innerHTML = newStack.display();
  }
};

const addToStack = () => {
  // ... your code goes here
  if (newStack.stackControl.length < 10) {
    warningBottomStack.style.display = "none";
    newStack.push();
    const li = stackList.querySelectorAll(".inactive");
    console.log(li);
    li[0].classList.replace("inactive", "active");
    const myInputStack = container.querySelectorAll("input");
    console.log(myInputStack[0].value);
    li[0].textContent = myInputStack[0].value;
  } else {
    generateWarningStack("overflow");
  }
};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.stackControl.length <= 0) {
    generateWarningStack("underflow");
  } else {
    warningTopStack.style.display = "none";
    newStack.pop();
    const li = stackList.querySelectorAll(".active");
    console.log(li);
    let lastIndex = li.length - 1;
    li[lastIndex].classList.replace("active", "inactive");
    clearStackInput();
  }
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);
