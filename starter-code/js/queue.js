var queue = new QueueDataStructure(8);
var queueCounter = 0;

$(document).ready(function() {
  var inputText = $("#new-element-input");
  var queueUI = $("#queue");

  $(".btn-add").click(function() {
    console.log("onclick!");
    bindQueueControl(queue.enqueue(queueCounter + " " + inputText.val()));
    queueCounter++;
  });

  $(".btn-take").click(function() {
    console.log("onclick!");
    bindQueueControl(queue.dequeue());
    if (queue.isEmpty()) queueCounter = 0;
  });

  function bindQueueControl(queueControl) {
    if (queueControl === "Queue Overflow") {
      // add Stack Overflow
      setOverflow(queueControl);
    } else if (queueControl === "Queue Underflow") {
      setUnderflow(queueControl);
    } else if (typeof queueControl === "object") {
      // fill stacks
      setAllStackElementsToEmpty();
      queueControl.forEach(function(element, index) {
        setFilled(queueUI.children().eq(index), element);
      });
    }
  }

  function setOverflow(text) {
    var overflowChild = queueUI.children().eq(queue.MAX_SIZE - 1);
    setAlert(overflowChild, text);
  }

  function setAlert(child, text) {
    child.addClass("alert");
    child.removeClass("empty filled");
    child.text(text);
  }

  function setUnderflow(text) {
    var underflowChild = queueUI.children().eq(0);
    setAlert(underflowChild, text);
  }

  function setEmpty(child) {
    child.addClass("empty");
    child.removeClass("filled alert");
    child.text("");
  }

  function setFilled(child, text) {
    child.addClass("filled");
    child.removeClass("empty alert");
    child.text(text);
  }

  function setAllStackElementsToEmpty() {
    queueUI.children().each(function() {
      setEmpty($(this));
    });
  }
});
