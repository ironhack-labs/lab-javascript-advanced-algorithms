var stack = new StackDataStructure();

var addToStack = document.getElementById("add-to-stack");
var removeFromStack = document.getElementById("remove-from-stack");
var stackInput = document.getElementById("stack-input");
var stackList = document.querySelector(".stack-list");
var stackRemovedItem = document.querySelector(".current-stack-take");

function addItemToStack() {
  let liHtml = "";
  if (stackInput.value != "") {
    stack.push(stackInput.value);
  }
  for (let i = stack.stackControl.length - 1; i >= 0; i--) {
    liHtml += `<li>${stack.stackControl[i]}</li>`;
  }
  stackList.innerHTML = liHtml;
}

function removeItemFromStack() {
  let liHtml = "";
  let toBeRemoved = stack.stackControl[stack.stackControl.length - 1];
  if (stack.stackControl.length) {
    stack.pop();
    for (let i = stack.stackControl.length - 1; i >= 0; i--) {
      liHtml += `<li>${stack.stackControl[i]}</li>`;
    }
    stackList.innerHTML = liHtml;
    stackRemovedItem.innerHTML = toBeRemoved;
  }
}

addToStack.onclick = addItemToStack;
removeFromStack.onclick = removeItemFromStack;
