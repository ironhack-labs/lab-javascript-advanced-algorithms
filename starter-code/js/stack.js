$(document).ready(function() {
  let theStack = new StackDataStructure();
  let htmlOverFlow =
    '<li id="overFlow" class="list-group-item list-group-item-danger" style="height: 50px; border: 1px solid white; text-align: center">Stack Overflow!</li>';
  let htmlUnderFlow =
    '<li id="underFlow" class="list-group-item list-group-item-danger" style="height: 50px; border: 1px solid white; text-align: center">Stack Underflow!</li>';
  let count = 0;

  let pushValue;
  let popValue;

  $("#addStack").click(function() {
    if (popValue === "Stack Underflow") {
      $("#underFlow").remove();
    }
    pushValue = theStack.push($("#inputStack").val());
    if (pushValue === "Stack Overflow") {
      if ($(".list-group-item-danger").length === 0) {
        $(".listStack").prepend(htmlOverFlow);
      }
    } else {
      $("#" + count).text(theStack.stackControl.slice(-1));
      $("#" + count).toggleClass(
        "list-group-item-secondary list-group-item-primary"
      );
      count++;
      console.log(count);
    }
  });

  $("#takeStack").click(function() {
    if (pushValue === "Stack Overflow") {
      $("#overFlow").remove();
    }
    popValue = theStack.pop();
    if (popValue === "Stack Underflow") {
      if ($(".list-group-item-danger").length === 0) {
        $(".listStack").append(htmlUnderFlow);
      }
    } else {
      $("#" + count).text('')
      $("#" + count).toggleClass(
        "list-group-item-primary list-group-item-secondary"
      );
      count--;
      console.log(count);
    }
  });
});
