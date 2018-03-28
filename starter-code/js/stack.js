$(document).ready(function() {
  var stack = new StackDataStructure();

  var $container = $(".container");

  var $stackContainer = $("<div class='col-md-5' id='stack'>");
  $stackContainer.appendTo($container);

  var $gap = $("<div class='col-md-2'>");
  $gap.appendTo($container);

  $("<h2>Stack</h2>").appendTo($stackContainer);
  $("<input class='form-control' id='stackItem' placeholder='Add the element to the stack...'>").appendTo($stackContainer);
  $("<button class='btn btn-primary col-md-12' id='addStack'>ADD</button>").appendTo($stackContainer);
  $("<button class='btn btn-danger col-md-12' id='takeStack'>TAKE</button>").appendTo($stackContainer);

  for (var i = stack.MAX_SIZE - 1; i >= 0; i--) {
    $("<div class='empty form-control col-md-12' id='stack-" + i + "'>").appendTo($stackContainer);
  }

  // show pop value
  var $stackPop = $("<div class='col-md-12' id='stack-pop'>");
  $stackPop.appendTo($stackContainer);

  $("#addStack").on("click", function(e) {
    var item = $("#stackItem").val();

    if (item != "") {
      var resultPush = stack.push(item);

      if (resultPush) {
        printStack(stack);
      } else if (resultPush == "Stack Overflow") {
      }

      $("#stackItem").val("");
    }
  });

  $("#takeStack").on("click", function(e) {
    var resultPop = stack.pop();
    
    $("#stack-pop").text(resultPop);

    if (resultPop != "Stack Underflow") {
      $("div#stack-0").addClass("danger");
      $("div#stack-0").text("Stack Underflow");
    } else {
      clearStack(stack);
    }
  });

  function printStack(stack) {
    for (var i = 0; i < stack.stackControl.length; i++) {
      if (stack.stackControl[i] != undefined) {
        $("div#stack-" + i)
          .removeClass("empty")
          .addClass("full");
        $("div#stack-" + i).text(stack.stackControl[i]);
      }
    }
  }

  function clearStack(stack) {
    for (var i = 0; i < stack.stackControl.length; i++) {
      if (stack.stackControl[i] == undefined) {
        $("div#stack-" + i)
          .removeClass("full")
          .addClass("empty");
        $("div#stack-" + i).text("");
      }
    }
  }
});
