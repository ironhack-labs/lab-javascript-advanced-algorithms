$(document).ready(function() {
  var queue = new QueueDataStructure();

  var $container = $(".container");

  var $queueContainer = $("<div class='col-md-5' id='queue'>");
  $queueContainer.appendTo($container);

  $("<h2>Queue</h2>").appendTo($queueContainer);
  $("<input class='form-control' id='queueItem' placeholder='Add the element to the queue...'>").appendTo($queueContainer);
  $("<button class='btn btn-primary col-md-12' id='addQueue'>ADD</button>").appendTo($queueContainer);
  $("<button class='btn btn-danger col-md-12' id='takeQueue'>TAKE</button>").appendTo($queueContainer);

  var $queueOverflow = $("<div class='col-md-12 form-control danger' id='queue-overflow'>");
  $queueOverflow.appendTo($queueContainer);

  for (var i = 0; i < queue.MAX_SIZE; i++) {
    $("<div class='form-control col-md-12' id='queue-" + i + "'>").appendTo(
      $queueContainer
    );
  }

  // show dequeue value
  var $dequeue = $("<div class='col-md-12' id='dequeue'>");
  $dequeue.appendTo($queueContainer);

  $("#addQueue").on("click", function(e) {
    var item = $("#queueItem").val();

    if (item != "") {
      var resultEnqueue = queue.enqueue(item);
      printQueue(queue);

      if( resultEnqueue == "Queue Overflow" ) {
        $queueOverflow.css("display","block");
        $queueOverflow.text("Stack Overflow");
      }

      $("#queueItem").val("");
    }
  });

  $("#takeQueue").on("click", function(e) {
    var resultDequeue = queue.dequeue();
    clearQueue(queue);
    
    $("#dequeue").text(resultDequeue);

    if( resultDequeue == "Queue Underflow" ) {
      $queueOverflow.css("display","none");
      $("#queue-0").addClass("danger");
      $("#queue-0").text("Queue Underflow");
    }
  });

  function printQueue(queue) {
    for (var i = 0; i < queue.queueControl.length; i++) {
      if (queue.queueControl[i] != undefined) {
        $("div#queue-" + i).removeClass("danger");
        $("div#queue-" + i).addClass("full");
        $("div#queue-" + i).text(queue.queueControl[i]);
      }
    }
  }

  function clearQueue(queue) {
    for (var i = 0; i <= queue.queueControl.length; i++) {
      if (queue.queueControl[i] == undefined) {
        $("div#queue-" + i).removeClass("danger");
        $("div#queue-" + i).removeClass("full");
        $("div#queue-" + i).text("");
      }
    }
  }
});
