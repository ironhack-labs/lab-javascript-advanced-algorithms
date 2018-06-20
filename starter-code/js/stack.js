$(document).ready(function() {
  var stack = new StackDataStructure();

  $("#inputStack").click(function(e) {
    $(this).val("");
  });

  $("#add-stack").click(function(e) {
    if (stack.canPush()) {
      var counter = 8 - stack.stackControl.length;
      if (stack.isEmpty()) {
        $(".stack-list:last-child").removeClass("flow");
        $(".stack-list:last-child").addClass("on");
        $(".stack-list:last-child").text($("#inputStack").val());
      } else {
        $(".stack-list:nth-child(" + counter + ")").addClass("on");
        $(".stack-list:nth-child(" + counter + ")").text($("#inputStack").val());
      }
      stack.push($(".stack-list:nth-child(" + counter + ")").text($("#inputStack").val()))
    } else{
       $(".stack-list:first-child").addClass("flow");
       $(".stack-list:first-child").text("Stack Overflow");
  }
  });

  $("#take-stack").click(function(e) {
    if (stack.isEmpty()) {
      $(".stack-list:last-child").addClass("flow");
      $(".stack-list:last-child").text("Stack Underflow");
    } else {
    $(".stackUl > .on").first().text("");
    $(".stackUl > .on").first().removeClass("on");
    $(".stackUl > .flow").first().removeClass("flow");
    stack.pop();
    }
  }); 
});