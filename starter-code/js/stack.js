//console.log("hello");

var stack = new StackDataStructure();

$(".btn-stack .add").click(function() {
  if (stack.canPush() === false) {
    $(".stack .empty:last").toggleClass(".tropdeflow");
    $(".stack .tropdeflow").append(stack.pop());
  } else {
    $(".stack .empty:last").toggleClass("full");
  }
});

/* $("#stack:first").removeClass("hidden");
  } else {
    stack.push($("#stack-input").prop("value"));
    $(".stack empty:last").addClass("full");
    $(".stack empty:last").removeClass("empty");
    $(".stack full:first").html($("#stack-input").prop("value"));
  }
  $("#stack-input").prop("value", "");
});

$("#btn-stack add").on("click", function() {
  $("#stack-message").html("");
  $("#stack-input").prop("value", "");
  $("#stack>.flow:first").addClass("hidden");
  if (stack.isEmpty() === true) {
    $(".stack .empty:last").toggleClass(".tropdeflow");
  } else {
    $(".stack empty:first").addClass("empty");
    $(".stack full:last").removeClass("full");
    
  }
});
View;
*/
