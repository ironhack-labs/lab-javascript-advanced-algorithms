$(document).ready(function() {

  var stack = new StackDataStructure();

  $(".btn-primary").on("click", function() {
    if (stack.stackControl.length < stack.MAX_SIZE) {
    stack.push($("input").val());
    $(".empty-block").not(".taken-block").last().addClass("taken-block").text($("input").val());
  } else  {
    $(".stack-overflow").fadeIn(400);
    setTimeout(function() {
      $(".stack-overflow").fadeOut(400);
    }, 1000);
  }
  });

  $(".btn-danger").on("click", function() {
    if (stack.stackControl.length > 0) {
    stack.pop($("input").val());
    $(".taken-block").first().removeClass("taken-block").text("");
  } else  {
    $(".stack-underflow").fadeIn(400);
    setTimeout(function() {
      $(".stack-underflow").fadeOut(400);
    }, 1000);
  }
  });

});
