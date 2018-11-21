$(document).ready(function () {

  queueSize = prompt("And for the queue?")
  var queue = new QueueDataStructure(queueSize);

  printQueue(queue.MAX_SIZE); // print the cells of the queue

  $("#btn-add-queue").click(function() {
    queueClickAddFn(queue);
  });

  $("#btn-take-queue").click(function() {
    queueClickTakeFn(queue);
  });
});

function printQueue(numElements) {

  for (var i = 0; i < numElements; i++) {
    var elem = $("#queue-template-box > div").clone(true);  //clone the template...
    $("#queue-boxes").append(elem); //... and append it to the "#stack-boxes" div
  }
}

function buildNewBox(newElem) {

  var newBox = $("#queue-template-box > div").clone(true); //clone the template...
  $(newBox).addClass("taken").append(newElem); //append the newElem in newBoox
  return newBox;

}

function queueClickAddFn(queue) {
  
  $("#queue-underflow").attr("style", "visibility: hidden");  //hide the "underflow" div
  $("#queue-elem-taken").empty();   //empty span "#queue-elem-taken" (this span contains the elements taken)
  $("#btn-take-queue").attr("disabled", false);  //enable "take" btn

  if ($("#input-queue").val() !="") {  //if there is something in the input...
    if (queue.canEnqueue()) {  //if the queue is not full..
    
      var newElem = "<p>" + $("#input-queue").val() + "</p>"; //create new <p> and put the value on it.

      if (queue.isEmpty()) {  // if it's going to be the first item...
        $("#queue-boxes > div").first().addClass("taken").append(newElem);
      } else {  //if there are more items in the stack...
        $("#queue-boxes").prepend(buildNewBox(newElem));  //create a new cell and prepend it in the queue
        $("#queue-boxes > div").last().remove();  //remove the last cell of the queue
      }
      queue.enqueue($("#input-queue").val());  //put the item in the "queue" object

    } else {  // if the queue is full...
      $("#queue-overflow").attr("style", "visibility: visible");  //show "queue overflow"
      $("#btn-add-queue").attr("disabled", true);  //disable "add" btn
    }
    $("#input-queue").val("");  //empty the input
  }
}

function queueClickTakeFn(queue) {

  $("#queue-overflow").attr("style", "visibility: hidden");  //hide the "overflow" div
  $("#btn-add-queue").attr("disabled", false);  //enable "add" btn
  $("#input-queue").val("");  //empty the input

  if (queue.isEmpty()) {  //if the queue is empty
    $("#queue-underflow").attr("style", "visibility: visible");  //show "queue underflow"
    $("#btn-take-queue").attr("disabled", true);  //disable "take" btn
    $("#queue-elem-taken").text("");  //empty span "#queue-elem.taken"

  } else {  //if there are items in the stack...
    var elementTaken = queue.dequeue();  //take out item and we put it on "elementTaken" var
    $("#queue-elem-taken").text(elementTaken);  //show item on "queue-elem-taken" span
    $("#queue-boxes > div > p").last().parent().removeClass("taken").empty();  //we remove the item of the queue(html)
  }
}