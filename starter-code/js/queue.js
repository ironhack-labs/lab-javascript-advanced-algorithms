let queue = new QueueDataStructure();

$("#queueItem").click(function() {
  if(queue.canEnqueue()) {
    queue.enqueue("item");
    let currentItem = queue.queueControl.length;
    console.log("Current Item: " + currentItem);
    $(".queue-box:nth-child("+(currentItem)+")").addClass("checked");
    $("")
  
  
  } else {
      $("#queueError").text("  Overflow");
      setTimeout(function(){
        $("#queueError").text("");
      },1500);
  }
});

$("#dequeueItem").click(function() {
  if(!queue.isEmpty()) {
    let currentItem = queue.queueControl.length-1;
    queue.dequeue();
    console.log("Current Item: " + currentItem);
    $(".queue .checked:first").removeClass("checked");
    $(".queue .checked:last").addClass("checked");
  } else {
      $("#queueError").text("  Underflow");
      setTimeout(function(){
        $("#queueError").text("");
      },1500);
  }
});

