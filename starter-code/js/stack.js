var StackDataStructure = new StackDataStructure();

$(document).ready(_drawStack());
$("#btn-add-stack").on("click", _addEelementToStack);
$("#btn-take-stack").on("click", _takeEelementFromStack);

function _drawStack () {
  var stack = $("#stack");
  stack.html("");
}

for (i = 0; i < stackDataStructure.MAX_SIZE; i++) {
  var content = stackDataStructure.stackControl[i] || "";
  var cssClass = content ? " full" : "";
}
