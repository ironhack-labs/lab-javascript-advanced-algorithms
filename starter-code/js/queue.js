var queue = new QueueDataStructure();

$("#add-btn-queue").click(function() {
  queue.enqueue(1);
  var i = queue.queueControl.length -1;
  var x = $("#inputGroup-sizing-sm-2").prop('value');
  console.log(i);
  if(!queue.canEnqueue()){
    $(".row-over-overflow").addClass("queue-div-overflow");
    $(".row-over-overflow").html("STACK OVERFLOW");
    return
  }else{
    $($(".row-over")[i]).addClass("queue-div");
    $($(".row-over")[i]).html(x);
    $(".row-over-underflow").removeClass("queue-div-underflow");
    $(".row-over-underflow").html("");
  }
});


$("#remove-btn-queue").click(function() {
  queue.dequeue(f);
  var f = queue.MAX_SIZE - queue.queueControl.length-1; 
  var x = queue.queueControl.length;

  console.log(f)
  console.log(x);
  if(queue.isEmpty()){
    $($(".row-over")[f]).removeClass("queue-div");
    $(".row-over-underflow").addClass("queue-div-underflow");
    $(".row-over-underflow").html("STACK UNDERFLOW");
  }else {
    $($(".row-over")[f]).removeClass("queue-div");
    $($(".row-over")[f]).html("");
    $(".row-over-overflow").removeClass("queue-div-overflow");
    $(".row-over-overflow").html("");
    
  }
});