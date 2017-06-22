var queue;

$("document").ready(function(){
  console.log("queue ready");

  // Initialize queue
  queue = new QueueDataStructure();
  queue.MAX_SIZE = 8;

  // Listeners
  $("#queue button.add").click(function(){
    console.log("Add to queue");
    var input = $("#queue input");
    if( $.isNumeric(input.val())){
      if(queue.canEnqueue()){
        queue.enqueue(parseInt(input.val()));
        updateQueueRepresentation();
        $("#queue .underflow").addClass("hidden");
      }else{
        $("#queue .overflow").removeClass("hidden");
      }
    }else{
      input.val("");
    }
  });

  $("#queue button.delete").click(function(){
    console.log("remove from queue");
    if(!queue.isEmpty()){
      $("#queue .overflow").addClass("hidden");
      queue.dequeue()
      updateQueueRepresentation();
    }else{
      $("#queue .underflow").removeClass("hidden");
    }
  });

  // Helpers
  function updateQueueRepresentation(){
    //foreach existing element, draw it
    for(var i = 0; i < queue.queueControl.length; i++){
      var selector = "#queue-representation div:nth-child("+ (8-i) +")";
      // var tile =$(selector);
      $(selector).addClass("filled");
      $(selector).html(queue.queueControl[i]);
    };
    //Empty the remaining divs
    for(;i < 8; i++){
      var selector = "#queue-representation div:nth-child("+(8-i)+")";
      $(selector).removeClass("filled");
      $(selector).html("");
    }
  }
})
