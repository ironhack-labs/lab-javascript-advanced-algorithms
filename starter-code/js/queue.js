 $(document).ready(function() {
    var queue = new QueueDataStructure();
   
    $("#inputQueue").click(function(e) {
      $(this).val("");
    });

  $("#add-queue").click(function(e) {
    if(queue.canEnqueue()){
        if(queue.isEmpty()) {
          queue.enqueue($("#inputQueue").val());
         $(".queue-list:last-child").removeClass("flow");
         $(".queue-list:last-child").addClass("on");
         $(".queue-list:last-child").text(queue.queueControl[0]);
      } else {

          function showQueue(arr){
               queue.enqueue($("#inputQueue").val());

              for(var i = 0; i < arr.length; i++){
                $(".queue-list:nth-child(" + (8 - i) + ")").addClass("on")
                $(".queue-list:nth-child(" + (8 - i) + ")").text(arr[i]);
              }
            }
            showQueue(queue.queueControl)
      }
      
    } else{
      $(".queue-list:first-child").addClass("flow");
      $(".queue-list:first-child").text("Queue Overflow");
    }
  });


  $("#take-queue").click(function(e) {
    if(queue.isEmpty()) {
      $(".queue-list:last-child").addClass("flow");
      $(".queue-list:last-child").text("Queue Underflow");
    } else {
    $(".queueUl > .on").first().text("");
    $(".queueUl > .on").first().removeClass("on");
    $(".queueUl > .flow").first().removeClass("flow");
    queue.dequeue();
    }
  }); 
});