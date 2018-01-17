var stack = new StackDataStructure();

$("#add-button-stack").on("click", function() {
  $("#stack-message").html("");
  $("#stack>.flow:last").addClass("hidden");
  if ($("#stack-input").prop("value") === "") {
    $("#stack-message").html("No input!");
  } else if (stack.canPush() === false) {
    $("#stack>.flow:first").removeClass("hidden");
  } else {
    stack.push($("#stack-input").prop("value"));
    $(".stack-spot.empty:last").addClass("filled");
    $(".stack-spot.empty:last").removeClass("empty");
    $(".stack-spot.filled:first").html($("#stack-input").prop("value"));
  }
  $("#stack-input").prop("value", "");
});

$("#take-button-stack").on("click", function() {
  $("#stack-message").html("");
  $("#stack-input").prop("value", "");
  $("#stack>.flow:first").addClass("hidden");
  if (stack.isEmpty() === true) {
    $("#stack>.flow:last").removeClass("hidden");
  } else {
    $(".stack-spot.filled:first").html("");
    $(".stack-spot.filled:first").addClass("empty");
    $(".stack-spot.empty:last").removeClass("filled");
    $("#stack-message").html(
      "Last item pulled out: <b>" + stack.pop() + "</b>"
    );
  }
});
