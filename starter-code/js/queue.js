//add to Stack
function updateQueue(qu) {
  var currentBlock = '';

  // loop through queue and update visually
  for (var i = 0; i < qu.MAX_SIZE; i++) {

    currentBlock = '.queue-block-' + (i + 1);

    if (i < qu.queueControl.length ) {
      // fill blocks with values
      $(currentBlock).html(qu.queueControl[i]);
      $(currentBlock).addClass('full');
    } else {
      // update empty blocks
      $(currentBlock).html('');
      $(currentBlock).removeClass('full');
    }

  }

}


$(document).ready(function(){

    var myQueue = new QueueDataStructure;

    $('.queue-btn.add-btn').click( function(e) {
      if (myQueue.canEnqueue()) {
        myQueue.enqueue( $('.queue-input').val() );
        updateQueue(myQueue);
        $('.block.queue-underflow').hide();
      } else {
        $('.block.queue-overflow').show();
      }
      $('.queue-input').val("");
    });

    $('.queue-btn.take-btn').click( function(e) {
      if (!myQueue.isEmpty()) {
        myQueue.dequeue();
        updateQueue(myQueue);
        $('.block.queue-overflow').hide();
      } else {
        $('.block.queue-underflow').show();
      }
      $('.queue-input').val("");

    });

});
