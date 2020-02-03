// Initialize
const stack = document.getElementById("stack");
const startStack = document.getElementById("stackStart");
const stackOverflow = document.getElementById("stackOverflow");
const stackUnderflow = document.getElementById("stackUnderflow");
const divArrayStack = startStack.getElementsByClassName("col-8 p-2 border bg-light text-dark");
const divPopArrayStack = startStack.getElementsByClassName("col-8 p-2 border bg-dark text-light");
StackData = new StackDataStructure();
StackData.MAX_SIZE = 8;

// Add to stack
const addStack = () => {
  const inputValue = stack.querySelector("input").value;
  const pushResult = StackData.push(inputValue);
  //stackUnderflow.className = "col-8 p-2 border text-danger text-center hideRBtm";
  stackUnderflow.classList.replace("showRBtm", "hideRBtm");

  if (pushResult === "Stack Overflow") {
    stackOverflow.classList.replace("hideRTop","showRTop");
  } else {
    divArrayStack[divArrayStack.length - 1].innerText = inputValue;
    divArrayStack[divArrayStack.length - 1].className = "col-8 p-2 border bg-dark text-light";
  }
};

// Remove from stack
const removeStack = () => {
  const popResult = StackData.pop();
    stackOverflow.classList.replace("showRTop","hideRTop");
  if (popResult === 'Stack Underflow') {
    stackUnderflow.classList.replace("hideRBtm", "showRBtm");
  } else {
    divPopArrayStack[0].innerHTML = "&nbsp";
    divPopArrayStack[0].className = "col-8 p-2 border bg-light text-dark";
  }
};

// Listen for clicks
const addButtonStack = stack.getElementsByClassName("btn")[0];
addButtonStack.addEventListener("click", e => addStack());

const takeButtonStack = stack.getElementsByClassName("btn")[1];
takeButtonStack.addEventListener("click", e => removeStack());
