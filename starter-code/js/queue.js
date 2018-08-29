
function addValidElementOfQueue(){
  var newDivQueue = $.parseHTML(emptyNewElement);
  var valueToQueue = $("#queue-column ._input-element").val();
  var thisQueue = $("#queue-column ._this-queue");
  $(newDivQueue).html(valueToQueue);
  $(thisQueue).prepend(newDivQueue);
};

function takeValidElementOfQueue(){
  var thisQueueChildren = $("#queue-column ._this-queue").children();
  var divToTake = $(thisQueueChildren)[thisQueueChildren.length-1];
  var valueOfTaken = $(divToTake).remove().html();
  printOnQueueDisplay("Element taken: " + valueOfTaken);
};


function printOnQueueDisplay (string) {
  $("#queue-column ._status-display").val(string)
};