var queue = new QueueDataStructure();

var queueInput = $('#queue-input');
var queueDiv = $('#queue-div');

$('#add-queue').on('click', function(){
  // IF we can add element to the queue we create new dive and add it
  // so after we remove the first one it looks like they are moving one
  // position
  if(queue.enqueue(queueInput.val()) !== "Queue Overflow"){
      var el = $('<div>');
      el.addClass("queue-element");
      el.addClass("queue-item");
      el.text(queueInput.val());
      queueDiv.append(el);

      $('.queue-element:first').remove();

      $('.error-queue.under').css({display:'none'});
      //Reset input value
      queueInput.val("");
  } else {
    $('.error-queue.over').css({display:'flex'});
  }
});

$('#delete-queue').on('click', function(){
  $('.error-queue.over').css({display:'none'});

  if(queue.dequeue() !== 'Queue Underflow'){
    $('.queue-item:first').text("").removeClass("queue-item");
  } else {
    $('.error-queue.under').css({display:'flex'});
  }
});
