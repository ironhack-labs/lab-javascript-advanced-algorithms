$(document).ready(function(){
  var queue = new QueueDataStructure();
  var addQueueBtn = $("#queue-add");
  var takeQueueBtn = $("#queue-take");
  var queueInput = $('#queue-input');
  function printQueue(arr){
    $(".queue-item").removeClass('active').text('');
    for(var i = 0; i < arr.length; i++){
      $('.queue-wrap .queue-item:nth-child('+(10-i)+')').addClass('active').text(arr[i]);
    }
  }
  addQueueBtn.click(function(){
    if(queue.enqueue(queueInput.val()) === 'Queue Overflow'){
      return alert('Queue Overflow');
    }
    printQueue(queue.queueControl);
    queueInput.val('');
  });
  takeQueueBtn.click(function(){
    if(queue.dequeue() === 'Queue Underflow'){
      return alert('Queue Underflow');
    }
    printQueue(queue.queueControl);
  });
});