var queue;

$(document).ready(function() {
  queue = new QueueDataStructure();

  $("#queueAddBtn").click(function() {
    if (queue.canEnqueue()){
      if ($(".underflowQueueElement").hasClass("active")){
        $(".underflowQueueElement").removeClass("active");
        $(".underflowQueueElement").addClass("inactive");
        $(".underflowQueueElement").val("");
      }
      var element = $("#queueInput").val();
      queue.enqueue(element);
      var pos = $(".queueEmpty:first");
      pos.removeClass("queueEmpty");;
      pos.addClass("queueFull");
      pos.val(element);
    }
    else {
      $(".overflowQueueElement").removeClass("inactive");
      $(".overflowQueueElement").addClass("active");
      $(".overflowQueueElement").val("Queue Overflow");
    }
  });

  $("#queueTakeBtn").click(function() {
    if (queue.isEmpty()){
      $(".underflowQueueElement").removeClass("inactive");
      $(".underflowQueueElement").addClass("active");
      $(".underflowQueueElement").val("Queue Underflow");
    }
    else {
      if ($(".overflowQueueElement").hasClass("active")){
        $(".overflowQueueElement").removeClass("active");
        $(".overflowQueueElement").addClass("inactive");
        $(".overflowQueueElement").val("");
      }
      var el = queue.dequeue();
      var pos = $(".queueFull:first");
      pos.removeClass("queueFull");;
      pos.addClass("queueEmpty");
      pos.val("");
      $("#queueTake").text("You take the element: '"+el+"' out of the queue");
      console.log(el);
    }
  });
});
