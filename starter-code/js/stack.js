function init() {
  var stack = new StackDataStructure();
  var item = $(".stack-item");

  $("#btn-add").on("click", function() {

    var input = $("#input");

    if(stack.push(input.val()) !== "Stack Overflow")  {
      console.log("you have space");
      if(stack.stackControl.length === 1) {
        item.last().addClass("is-selected").text(input.val()).removeClass("warning");
      } else {
        $(".is-selected:first").prev().addClass("is-selected").text(input.val());
      }

    } else {
      console.log("Stack Overflow");
      item.first().addClass("warning").text("Stack overflow");
      // $(".is-selected:first").addClass("is-selected").text(input.val();
    }

  })

  $("#btn-take").on("click", function() {
    console.log("hola");
    if(stack.isEmpty()) {
      console.log('Stack Underflow');
    } else {
      $(".is-selected").first().removeClass("is-selected").contents().remove();
      stack.pop();
    }
  });
}

$(document).ready(init);
