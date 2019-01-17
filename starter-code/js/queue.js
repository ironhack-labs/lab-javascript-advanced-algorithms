let queue = new QueueDataStructure();

$("#queueItem").click(function() {
  if(queue.canEnqueue()) {
    queue.enqueue("item");

    if ( $(".queue-box").hasClass("checked") ) {
      $(".queue .checked:last").next().addClass("checked");
    } else {
      $(".queue-box:first").addClass("checked");
    }

    if ( $(".queue-box:last").hasClass("checked") ) {
     setTimeout(function(){
      let numOfElement = $(".queue-box + .checked").length;
      $(".queue-box + .checked").removeClass("checked");
      $("#queueError").text("...moved back");
      setTimeout(function(){
        $("#queueError").text("");
      },1000);
      $(".queue-box:lt("+numOfElement+")").addClass("checked");
     },700);
    }

  } else {
      $("#queueError").text("-Overflow");
      setTimeout(function(){
        $("#queueError").text("");
      },1500);
  }
});

$("#dequeueItem").click(function() {
  if(!queue.isEmpty()) {
    queue.dequeue();
    $(".queue .checked:first").removeClass("checked");
  } else {
      $("#queueError").text("-Underflow");
      setTimeout(function(){
        $("#queueError").text("");
      },1500);
  }
});

