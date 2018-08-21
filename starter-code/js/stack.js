var stack = new StackDataStructure();

$("#add-stack").click(function() {
  var element = $("#stackelement").val();
  var content = stack.push(element);

  if (content == "Stack Overflow") {
    $(".error-stack.over").show();
    return;
  }

  $(".error-stack.under").hide();

  $(".stack-element")
    .eq(stack.MAX_SIZE - content.length)
    .addClass("addedelement")
    .append(element);

  $("#stackelement").val("");
});

$("#delete-stack").click(function() {
  var lastElement = stack.pop();

  if (lastElement == "Stack Underflow") {
    $(".error-stack.under").show();
    return;
  }
  $(".error-stack.over").hide();
  $(".stack-element")
    .eq(stack.MAX_SIZE - stack.stackControl.length - 1)
    .removeClass("addedelement")
    .empty();
});
