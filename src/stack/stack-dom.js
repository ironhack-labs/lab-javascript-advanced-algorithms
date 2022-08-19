const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById("stack-input");
const container = document.getElementById("container");
const warningTopStack = document.querySelector("#stack-container .warning-top");
const warningBottomStack = document.querySelector(
  "#stack-container .warning-bottom"
);
const addStackBtn = document.getElementById("add-stack");
const takeStackBtn = document.getElementById("take-stack");

const stackTitle = document.querySelector("#container h2");
stackTitle.innerText = "📚 Stack (LIFO)";

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = "";
};

const renderListStack = () => {
  warningTopStack.style.display = "none";
  warningBottomStack.style.display = "none";
  stackList.innerHTML = "";
  let length = newStack.display().length;
  let size = newStack.MAX_SIZE - length;
  newStack.display().forEach((item) => {
    let li = document.createElement("li");
    li.className = "active";
    li.innerText = item;
    stackList.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement("li");
    li.className = "inactive";
    li.innerHTML = "&nbsp;";
    stackList.appendChild(li);
  }
};
renderListStack();

const generateWarningStack = (type) => {
  if (type === "underflow") {
    warningBottomStack.style.display = "block";
    warningBottomStack.innerText = "⚠️ Stack underflow ⚠️";
  } else if (type === "overflow") {
    warningTopStack.style.display = "block";
    warningTopStack.innerText = "⚠️ Stack overflow ⚠️";
  }
};
//! I took the provided addToStack func out because its not working
//! I will do the same implementation with try & catch
//const addToStack = () => {
//  if (newStack.push(stackInput.value) === "Stack Overflow") {
//    generateWarningStack("overflow");
//  } else {
//    clearStackInput();
//    renderListStack();
//  }
//};
const addToStack = () => {
  try {
    newStack.push(stackInput.value);
    renderListStack();
  } catch (error) {
    generateWarningStack("overflow");
    clearStackInput();
  }
};
//! The same for the removeFromStack method
//const removeFromStack = () => {
//  if (newStack.pop() === "Stack Underflow") {
//    generateWarningStack("underflow");
//  } else {
//    renderListStack();
//  }
//};
const removeFromStack = () => {
  try {
    newStack.pop();
    renderListStack();
  } catch (error) {
    generateWarningStack("underflow");
  }
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);
