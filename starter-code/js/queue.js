var queue = new QueueDataStructure();

var queueInput = $('#queue-input');
var queueDiv = $('#queue-div');

$('#add-queue').on('click', function(){
  if(queue.enqueue(queueInput.val()) !== "Queue Overflow"){
      console.log("dsad" + queue.queueControl.length);
      var el = $('<div>');
      el.addClass("queue-element");
      el.addClass("queue-item");
      el.text(queueInput.val());
      queueDiv.append(el);

      $('.queue-element:first').remove();

  } else {
    alert("Queue Overflow");
  }
});

$('#delete-queue').on('click', function(){
  if(queue.dequeue() !== 'Queue Underflow'){
    $('.queue-item:first').text("");
    $('.queue-item:first').removeClass("queue-item");
  } else {
    alert('Queue Underflow');
  }
});
