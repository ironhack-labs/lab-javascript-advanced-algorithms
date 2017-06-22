$(document).ready(function(){
  queue = new QueueDataStructure();
  queue.MAX_SIZE = 10;

  $(".btn#queue-add").click(function(){
    var value = $("#queue-input").val();
    queue.enqueue(value);
    updateQueue();
    // console.log("it pushes!");
    console.log(queue.queueControl);
  })

  $(".btn#queue-remove").click(function(){
    queue.dequeue();
    updateQueue();
    // console.log("it removes!")
    console.log(queue.queueControl);
  })

  function updateQueue(){
    for(var i=0; i < queue.queueControl.length; i++){
      var queueItem = "#queue-list li:nth-child("+ (queue.MAX_SIZE-i) +")";
      $(queueItem).addClass("filled");
    }
    for(;i < queue.MAX_SIZE; i++){
      var queueItem = "#queue-list li:nth-child("+ (queue.MAX_SIZE-i) +")";
      $(queueItem).removeClass("filled");
    }
  }
})
