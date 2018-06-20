var stack = new StackDataStructure();

$(document).ready(function() {
  $(".elementInput").focus(function() {
    $(".elementInput").val("");
    $(".elementInput").css("color", "darkgrey");
  });

  $(".add").click(function() {
    if ($("#stackU").css("display") == "block") {
      $("#stackU").css("display", "none");
    } else {
      var valueStr = $(".elementInput").val();
      if (valueStr != "") {
        if (stack.push($(".elementInput").val()) == "Stack Overflow") {
          $("#stackO").css("display", "block");
        } else {
          index = stack.stackControl.length - 1;
          stackElementStr = "#stack" + index;
          $(stackElementStr).removeClass("stackItem");
          $(stackElementStr).addClass("stackWithItem");
          $(stackElementStr).html(valueStr);
        }
      }
    }
  });

  $(".take").click(function() {
    if ($("#stackO").css("display") == "block") {
      $("#stackO").css("display", "none");
    } else {
      if (stack.isEmpty()) {
        $("#stackU").css("display", "block");
      } else {
        indexTopStack = stack.stackControl.length - 1;
        topElementStack = stack.pop();
        stackElementStr = "#stack" + indexTopStack;
        $(stackElementStr).removeClass("stackWithItem");
        $(stackElementStr).addClass("stackItem");
        $(stackElementStr).html("");
      }
    }
  });

});
