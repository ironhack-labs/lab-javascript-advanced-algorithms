var stack = new StackDataStructure(8);
var counter = 0;

$(document).ready(function() {
  var inputText = $("#new-element-input");
  var stackUI = $("#stack");

  $(".btn-add").click(function() {
    bindStackControl(stack.push(counter + " " + inputText.val()));
    counter++;
  });

  $(".btn-take").click(function() {
    bindStackControl(stack.pop());
    if (stack.isEmpty()) counter = 0;
  });

  function bindStackControl(stackControl) {
    if (stackControl === "Stack Overflow") {
      // add Stack Overflow
      setOverflow(stackControl);
    } else if (stackControl === "Stack Underflow") {
      // add Stack Underflow
      setUnderflow(stackControl);
    } else if (typeof stackControl === "object") {
      // fill stacks
      setAllStackElementsToEmpty();
      stackControl.forEach(function(element, index) {
        setFilled(stackUI.children().eq(index), element);
      });
    }
  }

  function setOverflow(text) {
    var overflowChild = stackUI.children().eq(stack.MAX_SIZE - 1);
    setAlert(overflowChild, text);
  }

  function setAlert(child, text) {
    child.addClass("alert");
    child.removeClass("empty filled");
    child.text(text);
    child.css("background-color", "#f3e2e2");
  }

  function setUnderflow(text) {
    var underflowChild = stackUI.children().eq(0);
    setAlert(underflowChild, text);
  }

  function setEmpty(child) {
    child.addClass("empty");
    child.removeClass("filled alert");
    child.text("");
    child.css("background-color", "#ededed");
  }

  function setFilled(child, text) {
    child.addClass("filled");
    child.removeClass("empty alert");
    child.text(text);
    child.css("background-color", getBackgroundColor(text.split(" ")[0]));
  }

  function setAllStackElementsToEmpty() {
    stackUI.children().each(function() {
      setEmpty($(this));
    });
  }
  function removeFromStack() {
    var child;
    if (stack.isEmpty) {
    }
  }
});
