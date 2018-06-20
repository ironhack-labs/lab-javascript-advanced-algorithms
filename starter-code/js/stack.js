var stack;
$(document).ready(function() {
  stack = new StackDataStructure();
  stack.MAX_SIZE = 8;
  var stackGrey = new StackDataStructure();
  var stackBlue = new StackDataStructure();
  $(".stack-element").each(function() {
    if ($(this).hasClass("grey")) stackGrey.push($(this));
  });
  $(".stack-element").each(function() {
    if ($(this).hasClass("blue")) stackBlue.push($(this));
  });
  $(".addS").on("click", function() {
    console.log(stackBlue.stackControl[1]);
    var inputValue = $("#stack-input").val();
    if (inputValue == "") return;
    if (stackGrey.isEmpty()) {
      $(".stack-elements").prepend(
        "<div class='stack-element overflow'></div>"
      );
      $(".stack-elements > .overflow").text("STACK OVERFLOW");

      var that = $(this);

      setTimeout(function() {
        $(".stack-elements > .overflow").remove();
        that.removeClass("no-clickable");
      }, 1000);
      $(this).addClass("no-clickable");
      return;
    }
    var e = stackGrey
      .pop()
      .addClass("blue")
      .removeClass("grey")
      .text(inputValue);
    stackBlue.push(e);
  });

  $(".takeS").on("click", function() {
    var inputValue = $("#stack-input").val();
    if (inputValue == "") return;
    if (stackBlue.isEmpty()) {
      $(".stack-elements").append(
        "<div class='stack-element overflow'></div>"
      );
      $(".stack-elements > .overflow").text("STACK UNDERFLOW");

      var that = $(this);

      setTimeout(function() {
        $(".stack-elements > .overflow").remove();
        that.removeClass("no-clickable");
      }, 1000);
      $(this).addClass("no-clickable");
      return;
    }
    var e = stackBlue
      .pop()
      .addClass("grey")
      .removeClass("blue")
      .text("");
    stackGrey.push(e);
  });
});
