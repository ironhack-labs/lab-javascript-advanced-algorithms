var stackDataStructure = new StackDataStructure();
var stackAddButton = document.getElementById("stack-add");
var stackTakeButton = document.getElementById("stack-take")
var stackInput = document.getElementById("stack-input");
var stackLi1 = document.getElementById("stack-1");

var stackListItems = document.getElementsByClassName("stack-list-item");
var stackListContainer = document.getElementById("stack-list-container")
var stackListFull = document.getElementsByClassName("li-full");


stackAddButton.onclick = function () {
  stackDataStructure.push(stackInput.value);
  if (stackDataStructure.canPush() == false) {
    var stackOverFlow = document.createElement("li");
    stackOverFlow.setAttribute("class", "stack li-flow");
    stackOverFlow.innerText = "STACK OVERFLOW!"
    stackListContainer.insertBefore(stackOverFlow, stackLi1);
    return stackAddButton.disabled = true;
  } else {
    stackListItems[stackListItems.length-1].innerHTML = stackInput.value;
    stackListItems[stackListItems.length-1].setAttribute("class", "stack li-full");
  }
}

stackTakeButton.onclick = function() {
  if (stackDataStructure.isEmpty() == true) {
    var stackUnderFlow = document.createElement("li");
    stackUnderFlow.setAttribute("class", "stack li-flow");
    stackUnderFlow.innerText = "STACK UNDERFLOW!"
    stackListContainer.insertBefore(stackUnderFlow, stackLi1);
    return stackTakeButton.disabled = true;
  } else {
    stackDataStructure.pop();
    stackListFull[0].innerHTML = "";
    stackListFull[0].setAttribute("class", "stack stack-list-item");
  }
}

