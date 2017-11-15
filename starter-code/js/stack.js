$(document).ready(function() {
  var stack = new StackDataStructure();

  // Click on Add button on Stack Column.
  $("#add1").click(function() {
    // If stack.push("inputvalue") happens, then add and remove classes.
    if (stack.push($("#inputs").val()) != "Stack Overflow") {
      $(".stack:last").addClass("greens").removeClass("stack").text(stack.stackControl[stack.stackControl.length - 1]);
      // Hide the underflows div if it's present.
      $(".underflows").css("display", "none");
      // Reset the input value.
      $("#inputs").val("");
      // If it returns "Stack Overflow" then alert it.
    } else {
      alert("Stack Overflow!");
      // Show the overflow div if it's display is none.
      $(".overflows").css("display", "block");
    }
  });

  // Click on Take button on Stack Column.
  $("#danger1").click(function() {
    // If pop happens, then remove and add classes.
    if (stack.pop() != "Stack Underflow") {
      // Write the element which left the stack.
      $("#lefts").text("An element " + "("+$(".greens:first").text()+")");
      $(".greens:first").addClass("stack").removeClass("greens").text("");
      // Hide the overflow div if it's present.
      $(".overflows").css("display", "none");
      // If it returns "Stack Underflow" then alert it.
    } else {
      alert("Stack Underflow!!");
      // Show the underflows div if its hidden.
      $(".underflows").css("display", "block");
    }
  });
});
