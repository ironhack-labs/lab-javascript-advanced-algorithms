$(function() {
    var queue = new QueueDataStructure();


    $('#queue .add').click(function() {
        if(queue.canEnqueue()) {
          queue.enqueue($('#queue input').val() || 'Element');
          updateQueueView();
          $("#queue .underflow").addClass("hidden");
          console.table(queue.queueControl);
        } else {
          $('#queue .overflow').removeClass('hidden');
        }
    });
    $('#queue .remove').click(function() {
        if(!queue.isEmpty()) {
          $("#queue .overflow").addClass("hidden");
          queue.dequeue();
          updateQueueView();
          console.table(queue.queueControl);
        } else {
          $('#queue .underflow').removeClass('hidden');
        }
    });

    function updateQueueView(){
      for(var i = 0; i < queue.queueControl.length; i++){
        var selector = "#queue-elements div:nth-child("+(queue.MAX_SIZE - i)+")";
        $(selector).addClass("filled");
        $(selector).html(queue.queueControl[i]);
      };
      //CONTINUE THE ITERATION FOR THE REST OF ITEMS
      for(var i; i < queue.MAX_SIZE; i++){
        var selector = "#queue-elements div:nth-child("+(queue.MAX_SIZE - i)+")";
        $(selector).removeClass("filled");
        $(selector).html("");
      }
    }
});
