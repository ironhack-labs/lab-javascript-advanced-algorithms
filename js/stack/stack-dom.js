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
  stackInput.value = "";
};

const renderListStack = () => {
  // ... your code goes here
  let html = "";
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    html += `<li class="inactive"></li>`;
  }
  stackList.innerHTML = html;
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === "underflow") {
    // ... your code goes here
  } else if (type === "overflow") {
    // ... your code goes here
  }
};

const addToStack = () => {
  // ... your code goes here
  const addTo = stackList.getElementsByClassName("inactive");
  const lastElm = addTo[0];
  lastElm.classList.toggle("active");
  lastElm.classList.toggle("inactive");
};

const removeFromStack = () => {
  // ... your code goes here
  const removeTo = stackList.getElementsByClassName("active");
  const firstElm = removeTo[removeTo.length - 1];
  firstElm.classList.toggle("inactive");
  firstElm.classList.toggle("active");
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);
