
var stack = new StackDataStructure();
var queue = new QueueDataStructure();

var emptyNewElement = '<div class="text-center border border-secondary bg-light p-3">x</div>'


// STACK

$("#stack-column ._btn-add").click( function() {
  var valueToStack = $("#stack-column ._input-element").val();
  var pushValidation = stack.push(valueToStack);
  if (pushValidation === "Stack Overflow"){
    return printOnStackDisplay("Stack Overflow!");
  } else {
    return addValidElementOfStack();
  }
});

$("#stack-column ._btn-take").click( function() {
  if (stack.pop() == "Stack Underflow"){
    return printOnStackDisplay("Stack Underflow!");
  } else {
  takeValidElementOfStack();
  }
});

$("#stack-column ._max-stack-input").change( function() {
  var newMaxValue = $("#stack-column ._max-stack-input").val()
  if (newMaxValue < stack.stackControl.length) {
    printOnStackDisplay("ERROR: Take elements out before new max!");
  } else {
    stack.MAX_SIZE = newMaxValue;
    printOnStackDisplay("Max Stack updated: " + newMaxValue);
  }
}); 


// QUEUE

$("#queue-column ._btn-add").click( function() {
  var valueToQueue = $("#queue-column ._input-element").val();
  var queueValidation = queue.enqueue(valueToQueue);
  if (queueValidation === "Queue Overflow"){
    return printOnQueueDisplay("Queue Overflow!");
  } else {
    return addValidElementOfQueue();
  }
});

$("#queue-column ._btn-take").click( function() {
  if (queue.dequeue() == "Queue Underflow"){
    return printOnQueueDisplay("Queue Underflow!");
  } else {
  takeValidElementOfQueue();
  }
});

$("#queue-column ._max-queue-input").change( function() {
  var newMaxValue = $("#queue-column ._max-queue-input").val()
  if (newMaxValue < queue.queueControl.length) {
    printOnQueueDisplay("ERROR: Take elements out before new max!");
  } else {
    queue.MAX_SIZE = newMaxValue;
    printOnQueueDisplay("Max Queue updated: " + newMaxValue);
  }
}); 