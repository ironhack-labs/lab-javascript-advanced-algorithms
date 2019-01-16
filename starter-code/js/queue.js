$(document).ready(function() {
  var queue = new QueueDataStructure();
  // add button logic
  $('#queue-add').click(function () {
    renderQueue(queue, queue.enqueue($('#queue-input').val()),false);
    // clear input box
    $('#queue-input').val("");
  })
  // take button logic
  $('#queue-take').click(function () {
    renderQueue(queue, queue.dequeue(), true);
  })
})

function renderQueue(queue, res, isPop) {
  // reset all
  for(var i=0; i<queue.MAX_SIZE; i++) {
    $("#queue-" + i).removeClass("row-filled row-element-error");
    $("#queue-" + i).text("");
    $("#pop-output").text("");
  }
  // render before any errors
  for(var i=0; i<queue.queueControl.length; i++) {
    $("#queue-" + i).addClass("row-filled");
    $("#queue-" + i).text(queue.queueControl[i]);
    }
  // render queue underflow error
  if(res === "Queue Underflow") {
    $("#queue-0").addClass("row-element-error");
    $("#queue-0").text("Queue Underflow!");
  // render queue overflow error
  } else if(res === "Queue Overflow") {
    $("#queue-" + (queue.MAX_SIZE-1)).addClass("row-element-error");
    $("#queue-" + (queue.MAX_SIZE-1)).text("Queue Overflow!");
  } 
  if (isPop && (res !== "Queue Underflow")){$("#pop-output").text("Queue Output: " + res);}
}