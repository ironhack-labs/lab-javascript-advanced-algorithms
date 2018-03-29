$(function() {
  var stack = new StackDataStructure();

  //REMOVE ELEMENT FROM STACK
  $("#take-element-stack").on("click", function() {
    removeFromStack();
  });
  //ADD ELEMENT TO STACK
  $("#add-element-stack").on("click", function() {
    addToStack();
  });
  $("#stack-clear-input").on("click", function() {
    $("#input-element-stack").val('');
  });

  function addToStack() {
    var valueToStack = $("#input-element-stack").val();

    if (!valueToStack) {
      alert("Please input a value to stack!");
    } else {
      if (stack.push(valueToStack)) {
        valueToStack = "<p>" + valueToStack + "</p>";
        var freeCell = stack.MAX_SIZE + 1 - stack.stackControl.length;
        $(".stack-elements > ul > li")
          .eq(freeCell)
          .addClass("occupied")
          .html(valueToStack);
        $("#stack-bottom").removeClass("over");
      } else {
        $("#stack-top")
          .html("<p>Stack Overflow</p>")
          .addClass("over")
          .removeClass("hidden");
      }
    }
  }

  function removeFromStack() {
    if (!stack.pop()) {
      $("#stack-bottom")
        .html("<p>Stack Underflow</p>")
        .addClass("over");
    } else {
        debugger;
        var freeCell = (stack.MAX_SIZE) - stack.stackControl.length;
        $(".stack-elements > ul > li")
          .eq(freeCell)
          .removeClass("occupied")
          .empty();

          $("#stack-top")
          .html("<p>Stack Overflow</p>")
          .removeClass("over")
          .addClass("hidden");
    }
  }
});
