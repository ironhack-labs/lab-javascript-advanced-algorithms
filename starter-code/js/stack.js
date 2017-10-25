// function init() {
  var stack = new StackDataStructure();
  var item = $(".stack-item");

  $("#btn-add").on("click", function() {

    var input = $("#input");

    if(stack.push(input.val()) !== "Stack Overflow")  {
      console.log("you have space");
      if(stack.stackControl.length === 1) {
        item.last().addClass("is-selected").text(input.val());

      } else {
        $(".is-selected:first").prev().addClass("is-selected").text(input.val());
      }

    } else {
      console.log("Stack Overflow");
    }

  })

  $("#btn-take").on("click", function() {
    console.log("hola");
    if(stack.isEmpty()) {
      console.log('Stack Underflow');
    } else {
      $(".is-selected").first().removeClass("is-selected");
      $("#input").text() = "";

      stack.pop();
    }
  });
// }

// $(document).ready(init);
