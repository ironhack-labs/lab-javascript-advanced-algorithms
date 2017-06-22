$(document).ready(function() {

  var stack = new StackDataStructure();

  $(".stack-btn.btn-add").click(function() {
    if (stack.canPush()) {
      var stackName = $(".input-stack").val();
      stack.push(stackName);
      updateStackDOM();
    } else {
      stackOverflowWarning();
    }
  });

  $(".stack-btn.btn-take").click(function() {
    if (stack.isEmpty()) {
      stackUnderflowWarning();
    } else {
      stack.pop();
      updateStackDOM();
    }
  });


  function updateStackDOM() {
    $(".stack").removeClass("blue");
    $(".stack").text("");
    for (var i = 0; i < stack.stackControl.length; i++) {
      $(".stack").eq(9-i).addClass("blue");
      $(".stack").eq(9-i).text(stack.stackControl[i]);
    }
  }

  function stackOverflowWarning() {}
  // $(".stack").overflow("Stack Overflow");
  //         $(".stack").eq(i-1).overflow;
  function stackUnderflowWarning() {}

});
