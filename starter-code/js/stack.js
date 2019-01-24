let stack = new StackDataStructure();
let addStack = document.getElementById("add-stack");
let stackELement = document.getElementsByClassName("stack-element");
let errorStack = document.getElementsByClassName("error-stack");
let stackOver = document.getElementsByClassName("error-stack over");
let stackUnder = document.getElementsByClassName("error-stack under");

addStack.addEventListener("click", e => {
  if (stack.canPush()) {
    let theStack = stack.push(this.stackElement.value);
    for (i = 0; i < stack.stackControl.length; i++) {
      stackElement[stack.MAX_SIZE - stack.stackControl.length].innerText =
        theStack[i];
      stackList[stack.MAX_SIZE - stack.stackControl.length].setAttribute(
        "class",
        "queue-item stack-element"
      );
      stackUnder.setAttribute("class", "error-stack");
    }
  } else {
    stackOver.setAttribute("class", "display error-stack");
  }
});
