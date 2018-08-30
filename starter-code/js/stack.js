$(document).ready(function() {
  var newElement = $("#input-stack").val();
  var stack = new StackDataStructure();

  //Add and take from the stack
  $("#add-btn-stack").click(function() {
    stack.push(newElement);
    if (stack.stackControl.length <= 9) {
      $(".element:last").toggleClass("element full");
    } else {
      $(".element:last").toggleClass("element overflow");
    }
  });
  $("#take-btn-stack").click(function() {
    stack.pop();
    if (stack.stackControl.length <= 8) {
      $(".full:first").toggleClass("full element");
    } else {
      $(".overflow").toggleClass("overflow element");
    }
  });
});
