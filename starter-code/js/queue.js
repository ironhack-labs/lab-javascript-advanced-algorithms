var queue = new QueueDataStructure;
var justAdd = queue.queueControl[queue.queueControl.length-1]
queue.MAX_SIZE = 8;

$(document).ready(function(){

  $('#add-queue').click(function(){
    $(".underflow-queue").text("");
    $(".underflow-queue").toggleClass('underflow-queue column');
    if (queue.queueControl.length === queue.MAX_SIZE) {
        $(".enqueued.top").text("Queue Overflow");
        $(".enqueued.top").toggleClass("enqueued overflow-queue");
    }
    queue.enqueue($('#input-queue').val());
    var inputQueue = $('#input-queue').val();
    $(".column:last").text(inputQueue);
    $('#input-queue').val('');
    $(".column:last").toggleClass("column enqueued");
  });

  $('#take-queue').click(function(){
    if (queue.queueControl.length === 0) {
      $(".column.bottom").text("Queue Underflow");
      $(".column.bottom").toggleClass("column underflow-queue");    
    }
    queue.dequeue(justAdd);
    $(".overflow-queue").text("");
    $(".overflow-queue").toggleClass('enqueued overflow-queue'); 
    $(".enqueued:first").text("");
    $('#input-queue').val('');
    $(".enqueued:first").toggleClass("enqueued column")
  });
})