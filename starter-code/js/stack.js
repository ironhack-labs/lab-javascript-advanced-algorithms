$(document).ready(function () {

  $("button.blue").on("click", function () {
    // retrieve value from input
    var stackInput = $("#stackInput").prop("value");
    if (stack.push(stackInput) == "Stack Overflow") {
      // show overflow
      $(".overflow").removeClass("hidden");
    } else {
      // add input to the stack
      $(".underflow").addClass("hidden");
      // select last grey box
      var element = $(".grey:visible:last");
      // insert the new value
      element.html(stackInput);
      // switch background
      switchBlock(element);
    };
  });

  $("button.red").on("click", function () {
    if (stack.pop() == "Stack Underflow") {
      $(".underflow").removeClass("hidden");
    } else {
      // overflow remains hidden ()
      $(".overflow").addClass("hidden");
      // get "newest" element + remove it from the stackController
      newestInput = $(".blue-input:visible:first");
      newestInput.html("");
      switchBlock(newestInput);
    }
  });

});

function switchBlock(element) {
  element.toggleClass("blue-input");
  element.toggleClass("grey");
  console.log(stack.stackControl);
};