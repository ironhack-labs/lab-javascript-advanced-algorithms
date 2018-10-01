var stack = document.querySelector("#stack");
var stackPush = document.querySelector("#stackPush");
var stackPop = document.querySelector("#stackPop");
var stackDataStructure = new StackDataStructure();
var und1 = 0;

stackPush.onclick = function() {
  if (stackDataStructure.stackControl.length < 1) {
    stack.removeChild(stack.lastChild);
  }
  if (stackDataStructure.push("a ") !== "Stack Overflow") {
    und1 = 0;
    var input = document.getElementsByTagName("input")[0];
    var linea = document.createElement("p");
    linea.innerHTML = "<p class= 'stackLine textAlign'>" + input.value + "</p>";
    stack.appendChild(linea);
  } else {
    if (stackDataStructure.stackControl.length === stackDataStructure.MAX_SIZE)
      var linea = document.createElement("p");
    linea.innerHTML =
      "<h4 class= 'overflow stackLine textAlign'>Stack Overflow</h4>";
    stack.appendChild(linea);
    stackDataStructure.stackControl.push("Stack Overflow");
  }
};
stackPop.onclick = function() {
  if (stackDataStructure.pop("a") !== "Stack Underflow") {
    stack.removeChild(stack.lastChild);
  } else {
    if (und1 === 0) var linea = document.createElement("p");
    linea.innerHTML =
      "<h4 class= 'underflow stackLine textAlign'>Stack Underflow</h4>";
    stack.appendChild(linea);
    und1 += 1;
  }
};
