$(document).ready(function(){
  var queue = new QueueDataStructure();

  $('.btn-Enqueue').on('click', function(){
    var enqueuedElement = queue.enqueue(1);
    if (enqueuedElement[0] == 1){
      var queueChild = queue.MAX_SIZE - queue.queueControl.length + 1;
      $(".queueBoxParent :nth-child("+queueChild+")").addClass('blue');
    } else if (enqueuedElement === "Queue Overflow") {
      alert ("Queue Overflow!");
    }
  });

  $('.btn-Dequeue').on('click', function(){
    var dequeueingMessage = queue.dequeue();
    if (dequeueingMessage !== "Queue Underflow"){
      var queueChild = queue.MAX_SIZE - queue.queueControl.length;
      $(".queueBoxParent :nth-child("+queueChild+")").removeClass('blue');
    } else {
      alert ("Queue Underflow!");
    }
  });

});
