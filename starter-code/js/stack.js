
function addValidElementOfStack(){
  var newDivStack = $.parseHTML(emptyNewElement);
  var valueToStack = $("#stack-column ._input-element").val();
  var thisStack = $("#stack-column ._this-stack");
  $(newDivStack).html(valueToStack);
  $(thisStack).prepend(newDivStack);
};

function takeValidElementOfStack(){
  var thisStackChildren = $("#stack-column ._this-stack").children();
  var divToTake = $(thisStackChildren)[0];
  var valueOfTaken = $(divToTake).remove().html();
  printOnStackDisplay("Element taken: " + valueOfTaken);
};


function printOnStackDisplay (string) {
  $("#stack-column ._status-display").val(string)
}
