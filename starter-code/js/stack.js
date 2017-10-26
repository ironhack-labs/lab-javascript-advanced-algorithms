const stackInput = document.getElementById("input-stack");
const stackAdd = document.getElementById("btn-add-to-stack");
const stackTake = document.getElementById("btn-take-from-stack");
const stackItems = document.getElementById("stack-items");
const maxSizeStack = document.getElementById("max-size-stack");
const sizeStack = document.getElementById("size-stack");

const stack = new StackDataStructure();

stackAdd.addEventListener("click", () => {
  if (stackInput.value === "") {
    console.log("no value to add");
    focusInput("input-stack");
  } else {
    stack.push(stackInput.value);
    createChildAndAppendChildToParent("div", stackItems, stackInput.value);
  }
  stackInput.value = "";
  focusInput("input-stack");
});

stackTake.addEventListener("click", () => {
  stack.pop();
  removeLastChildFromParent(stackItems, "stack");
  focusInput("input-stack");
});
