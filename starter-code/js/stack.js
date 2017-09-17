var stack = new StackDataStructure();

$(document).ready(function() {


  // if (stack.isEmpty()) {
  //   $("#stack-underflow").toggleClass("hidden");
  // }

});

$("#stack-underflow").hide();
$("#stack-overflow").hide();

$("#button-add").click(function() {
  event.preventDefault();
  var input = $("#form-stack").val();
  var newBlock = $(".stack-container .stack:nth-child(" + (stack.stackControl.length + 1) + ")");

  newBlock.text(input);
  stack.push(input);

  if (!stack.isEmpty()) {
    $("#stack-underflow").hide();
  }
  if (!stack.canPush()) {
    $("#stack-overflow").show();
  }

});

$("#button-delete").click(function() {
  event.preventDefault();
  var rmBlock = $(".stack-container .stack:nth-child(" + (stack.stackControl.length) + ")");
  stack.pop();
  rmBlock.empty();

  if (stack.isEmpty()) {
    $("#stack-underflow").show();
  }

  if(stack.canPush()) {
    $("#stack-overflow").hide();
  }

});
