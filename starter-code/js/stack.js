// console.log($ === jQuery);

// init
var stack = new StackDataStructure();

$(document).ready(function() {
  // console.log("READY");

  $(".btn-add-stack").click(function() {
    console.log("ADD");
    // get input value
    var value = $(".input-stack").val();

    // push input value to stack
    if (stack.canPush()) {
      stack.push(value);
      if ($(".stack-item:last").hasClass("flow")) {
        $(".stack-item:last").removeClass("flow");
      }
      $("#stack-container aside").text("");
      $(".stack-item:not(.filled):last").text(value);
      $(".stack-item:not(.filled):last").toggleClass("filled");
    } else {
      console.log("STACK OVERFLOW");
      if (!$("#stack .data .stack-item:first").hasClass("flow"))
        $("#stack .data .stack-item:first").before(
          `<div class="stack-item flow">Stack Overflow</div>`
        );
      else {
        $("#stack .data .stack-item:first").toggleClass("again");
        setTimeout(
          () => $("#stack .data .stack-item:first").toggleClass("again"),
          100
        );
      }
    }
  });

  $(".btn-take-stack").click(function() {
    console.log("TAKE");
    // pop top value from stack
    if (!stack.isEmpty()) {
      if ($(".stack-item:first").hasClass("flow"))
        $(".stack-item:first").remove();
      stack.pop();
      var popped = $(".stack-item.filled:first").text();
      $(".stack-item.filled:first").text("");
      $(".stack-item.filled:first").toggleClass("filled");
      $("#stack-container aside").text(popped);
    } else {
      console.log("STACK UNDERFLOW");
      if (!$("#stack .data .stack-item:last").hasClass("flow")) {
        $("#stack .data .stack-item:last")
          .text("Stack Underflow")
          .addClass("flow");
        $("#stack-container aside").text("");
      } else {
        $("#stack .data .stack-item:last").toggleClass("again");
        setTimeout(
          () => $("#stack .data .stack-item:last").toggleClass("again"),
          100
        );
      }
    }
  });
});
