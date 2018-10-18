$( document ).ready(function() {
  var queue = new QueueDataStructure();

  $('.q-overflow').hide();


  $('.queue-add').click(function() {
    if ($('.queue-input').val() != "") {
      let elem = $('.queue-input').val();
      queue.enqueue(elem);
      $('.queue-input').val("");
      render();
    }
  });

  $('.queue-take').click(function() {
    queue.dequeue();
    render();
  });


  function render() {
    $('.q-overflow').hide();
    $('.q-underflow').hide();


    $('.q-elem').text("");
    $('.q-elem').removeClass("active");

    if (queue.isEmpty()) {
      $('.q-underflow').show();
  
    }

    if (!queue.canEnqueue()) {
      $('.q-overflow').show();
    }


    for (i = 0; i < queue.queueControl.length; i++) {
      $('.q-elem' + i).text(queue.queueControl[i]);
      $('.q-elem' + i).addClass("active");
    }
  }
  
});