$(document).ready(function() {
  var stack = new StackDataStructure();
  // add button logic
  $('#stack-add').click(function () {
    renderStack(stack, stack.enqueue($('#stack-input').val()),false);
    // clear input box
    $('#stack-input').val("");
  })
  // take button logic
  $('#stack-take').click(function () {
    renderStack(stack, stack.dequeue(),true)
  })
})

function renderStack(stack, res, isPop) {
  // reset all
  for(var i=0; i<stack.MAX_SIZE; i++) {
    $("#stack-" + i).removeClass("row-filled row-element-error");
    $("#stack-" + i).text("");
    $("#pop-output").text("");
  }
  // render before any errors
  for(var i=0; i<stack.stackControl.length; i++) {
    $("#stack-" + i).addClass("row-filled");
    $("#stack-" + i).text(stack.stackControl[i]);
    }
  // render stack underflow error
  if(res === "Stack Underflow") {
    $("#stack-0").addClass("row-element-error");
    $("#stack-0").text("Stack Underflow!");
  // render stack overflow error
  } else if(res === "Stack Overflow") {
    $("#stack-" + (stack.MAX_SIZE-1)).addClass("row-element-error");
    $("#stack-" + (stack.MAX_SIZE-1)).text("Stack Overflow!");
  }
  if(isPop && (res !== "Stack Underflow")) {$("#pop-output").text("Stack Output: " + res);}
}