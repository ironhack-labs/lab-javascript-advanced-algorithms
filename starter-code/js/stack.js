$(document).ready(function() {

  var stack = new StackDataStructure();

  $(".btn-add").on('click', function() {
    var pushElement = stack.push(1);
    if (stack.canPush()) {
      console.log(stack.stackControl);
      $("ul .stackChild:last").addClass("active");
      $("ul .stackChild:last").removeClass("stackChild");
    } else {
      pushElement = stack.pop();
      alert("STACK OVERFLOW");
    }
  });

  $(".btn-take").on('click', function() {
    var popElement = stack.pop();
    if (popElement == "Stack Underflow") {
      alert("STACK UNDERFLOW");
    } else {
      console.log(popElement);
      $("ul .active:first").removeClass("active");
      $("ul .active:first").addClass("stackChild");
    }

  });

});
