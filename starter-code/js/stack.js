stack = new StackDataStructure();
function addToStack() {
//   console.log("agregando a la cola S " + size);
  stack.push(1);
  var size = stack.actualSize();
  var element = document.getElementById("s" + size);
  element.className += " full";
}
function removeFromStack() {
//   console.log("removiendo de la cola S" + size);
  var size = stack.actualSize();
  var element = document.getElementById("s" + size);

  stack.pop();
  element.className = "selements empty";
}
