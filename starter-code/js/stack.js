$(function() {
    var stack = new StackDataStructure();
  
    $("#take-element-stack").on("click", function() {
      removeFromStack();
    });
    
    $("#add-element-stack").on("click", function() {
      addToStack();
    });
  
    function addToStack() {
      var valueToStack = $("#input-element-stack").val();
  
      if (!valueToStack) {
        
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
      $("#input-element-stack").val("");
    }
  
    function removeFromStack() {
      if (!stack.pop()) {
        $("#stack-bottom")
          .html("<p>Stack Underflow</p>")
          .addClass("over");
      } else {
        var freeCell = stack.MAX_SIZE - stack.stackControl.length;
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