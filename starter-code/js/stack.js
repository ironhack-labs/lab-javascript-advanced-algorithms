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

  var $stackOverflow = $("<div class='col-md-12 form-control danger' id='stack-overflow'>");
  $stackOverflow.appendTo($stackContainer);

  for (var i = stack.MAX_SIZE - 1; i >= 0; i--) {
    $("<div class='form-control col-md-12' id='stack-" + i + "'>").appendTo($stackContainer);
  }

  // container where show pop value 
  var $stackPop = $("<div class='col-md-12' id='stack-pop'>");
  $stackPop.appendTo($stackContainer);

  $("#addStack").on("click", function(e) {
    var item = $("#stackItem").val();

    if (item != "") {
      var resultPush = stack.push(item);
      printStack(stack);

      if( resultPush == "Stack Overflow" ) {
        $stackOverflow.css("display","block");
        $stackOverflow.text("Stack Overflow");
      }

      $("#stackItem").val("");
    }
  });

  $("#takeStack").on("click", function(e) {
    var resultPop = stack.pop();
    clearStack(stack);
    
    $("#stack-pop").text(resultPop);

    if( resultPop == "Stack Underflow" ) {
      $stackOverflow.css("display","none");
      $("#stack-0").addClass("danger");
      $("#stack-0").text("Stack Underflow");
    }
  });

  // print full cells
  function printStack(stack) {
    for (var i = 0; i < stack.stackControl.length; i++) {
      if (stack.stackControl[i] != undefined) {
        $("div#stack-" + i).removeClass("danger");
        $("div#stack-" + i).addClass("full");
        $("div#stack-" + i).text(stack.stackControl[i]);
      }
    }
  }

  // print empty cells
  function clearStack(stack) {
    for (var i = 0; i <= stack.stackControl.length; i++) {
      if (stack.stackControl[i] == undefined) {
        $("div#stack-" + i).removeClass("danger");
        $("div#stack-" + i).removeClass("full");
        $("div#stack-" + i).text("");
      }
    }
  }
});
