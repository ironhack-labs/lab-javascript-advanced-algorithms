function init() {
  var stack = new StackDataStructure();
  var item = $(".stack");

  $("#btn-add").on("click", function() {

    var input = $("#input");

    if(stack.push(input.val()) !== "Stack Overflow")  {
      if(stack.stackControl.length === 1) {
        item.last().addClass("selected").text(input.val());

      } else {
        $(".selected:first").prev().addClass("selected").text(input.val());
      }

    } else {
      alert("Stack Overflow");
    }

  });

  $("#btn-take").on("click", function() {
    if(stack.isEmpty()) {
      alert ('Stack Underflow');
    } else {
      $(".selected").first().removeClass("selected");
      stack.pop();
    }
  });
}

$(document).ready(init);
