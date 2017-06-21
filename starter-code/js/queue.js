$(document).ready(function(){

  var queue;
  queue = new QueueDataStructure();
  $('#queue .add').on('click', function() {
    queue.isEmpty();
    queue.canEnqueue();
    queue.enqueue(0);


    $("#queue .disabled:last").addClass('active');
    $("#queue .disabled:last").removeClass('disabled');
  });

  $('#queue .take').on('click', function() {
    queue.isEmpty();
    queue.canEnqueue();
    queue.dequeue();

    $("#queue .active:last").addClass('disabled');
    $("#queue .active:last").removeClass('active');
  });

});
