$(document).ready(function(){
  var stack = new StackDataStructure();

  $("#add-stack").click(function () {

    var counter = stack.stackControl.length;
    var newItem = $("#stackelement").val();

    stack.push(newItem);
    $(".stack-element:eq(" + counter + ")").addClass("addedelement").text(newItem);

    $(".error-stack.under").fadeOut(300);
    if (!stack.canPush()) return $(".error-stack.over").fadeIn(300);

  });

  $("#delete-stack").click(function() {

    var counter = stack.stackControl.length - 1;

    stack.pop()
    $(".stack-element:eq(" + counter + ")").removeClass("addedelement").empty();

    $(".error-stack.over").fadeOut(300);
    if (stack.isEmpty()) return $(".error-stack.under").fadeIn(300);

  });

});