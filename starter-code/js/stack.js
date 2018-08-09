$(document).ready(function() {
  stack = new StackDataStructure();

  $("#add-btn").click(function() {
    addToStack(stack);
  });

  $("#take-btn").click(function() {
    takeFromStack(stack);
  });
});

function addToStack(stack) {
  var inputValue = $("#element-input").val();
  $("#element-input").val("");

  // var stackControl = stack.push(inputValue);
  if (stack.push(inputValue) === "Stack Overflow") {
    StackOverflow(true);
  } else {
    displayNewStackValue(stack.stackControl.length, inputValue);
    StackOverflow(false);
    StackUnderflow(false);
  }
}

function takeFromStack(stack) {
  if (stack.pop() === "Stack Underflow") {
    StackUnderflow(true);
  } else {
    StackUnderflow(false);
    StackOverflow(false);
    displayNewStackValue(stack.stackControl.length + 1, " ");
  }
}

function displayNewStackValue(stackLength, inputValue) {
  $(
    ".stack-element:nth-child(" +
      ($(".stack-element").length - (stackLength - 1)) +
      ")"
  ).text(inputValue);
}

function StackOverflow(isOverflow) {
  if (isOverflow) {
    $("#overflow").addClass("active-warning");
  } else {
    $("#overflow").removeClass("active-warning");
  }
}

function StackUnderflow(isUnderflow) {
  if (isUnderflow) {
    $("#underflow").addClass("active-warning");
  } else {
    $("#underflow").removeClass("active-warning");
  }
}
