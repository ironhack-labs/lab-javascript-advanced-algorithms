$(document).ready(function() {
  var queue = new QueueDataStructure();

  var $container = $(".container");

  var $queueContainer = $("<div class='col-md-5' id='queue'>");
  $queueContainer.appendTo($container);

  $("<h2>Queue</h2>").appendTo($queueContainer);
  $("<input class='form-control' id='queueItem' placeholder='Add the element to the queue...'>").appendTo($queueContainer);
  $("<button class='btn btn-primary col-md-12' id='addQueue'>ADD</butto>").appendTo($queueContainer);
  $("<button class='btn btn-danger col-md-12' id='takeQueue'>TAKE</button>").appendTo($queueContainer);

  for(var i = 0; i < queue.MAX_SIZE; i++) {
    $("<div class='empty form-control col-md-12' id='queue-" + i + "'>").appendTo($queueContainer);
  }

  // show dequeue value
  var $dequeue = $("<div class='col-md-12' id='dequeue'>");
  $dequeue.appendTo($queueContainer);

  $("#addQueue").on("click", function(e) {
    var item = $("#queueItem").val();
    
    var resultEnqueue = queue.enqueue(item);

    if( resultEnqueue ) {
      printQueue(queue);
    } else if( resultEnqueue == "Queue Overflow" ) {

    } else if( resultEnqueue == "Queue Underflow") {
      
    }

    $("#queueItem").val("");
  });

  function printQueue(queue) {
    for(var i = 0; i < queue.queueControl.length; i++) {
      if(queue.queueControl[i] != undefined) {
        $("div#queue-"+i).addClass("full");
        $("div#queue-"+i).text(queue.queueControl[i]);
      }
    }
  }
});