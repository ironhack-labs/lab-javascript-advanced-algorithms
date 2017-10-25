var stack;

$(document).ready(function() {
  stack = new StackDataStructure();

  $("#stackAddBtn").click(function() {
    if (stack.canPush()){
      if ($(".underflowStackElement").hasClass("active")){
        $(".underflowStackElement").removeClass("active");
        $(".underflowStackElement").addClass("inactive");
        $(".underflowStackElement").text("");
      }
      var element = $("#stackInput").val();
      stack.push(element);
      var pos = $(".stackEmpty:last");
      pos.removeClass("stackEmpty");;
      pos.addClass("stackFull");
      pos.text(element);
    }
    else {
      $(".overflowStackElement").removeClass("inactive");
      $(".overflowStackElement").addClass("active");
      $(".overflowStackElement").text("Stack Overflow");
    }
  });

  $("#stackTakeBtn").click(function() {
    if (stack.isEmpty()){
      $(".underflowStackElement").removeClass("inactive");
      $(".underflowStackElement").addClass("active");
      $(".underflowStackElement").text("Stack Underflow");
    }
    else {
      if ($(".overflowStackElement").hasClass("active")){
        $(".overflowStackElement").removeClass("active");
        $(".overflowStackElement").addClass("inactive");
        $(".overflowStackElement").text("");
      }
      var el = stack.pop();
      var pos = $(".stackFull:first");
      pos.removeClass("stackFull");;
      pos.addClass("stackEmpty");
      pos.text("");
      $("#stackTake").text("You take the element: '"+el+"' out of the stack");
    }
  });
});
