$(document).ready(function() {

  $('.add-queue').on("click", function() {
    var add = $('.form-queue').val();
    if (queue.canEnqueue()) {
      queue.enqueue(add);
      console.log(queue.queueControl);

      $($('.content-queue').children().get().reverse()).each(function(index) {
        if (queue.queueControl[index]) {
          $(this).html(queue.queueControl[queue.queueControl.length - index - 1]).removeClass("queue-grey queue-underflow").addClass("queue-div");
        } else {
          $(this).html("").removeClass("queue-underflow").addClass("queue-grey");
        }
      });

    } else {
      $('.content-queue').children().html("Queue Overflow").removeClass('queue-grey queue-div').addClass("queue-underflow");
    }

  });

  $('.take-queue').on("click", function() {
    if (queue.isEmpty()) {
      $('.content-queue').children().html("Queue Underflow").addClass("queue-underflow");
    } else {
      queue.dequeue();
      console.log(queue.queueControl);

      $($('.content-queue').children().get().reverse()).each(function(index) {
        if (queue.queueControl[index]) {
          $(this).html(queue.queueControl[index]).removeClass("queue-grey queue-underflow").addClass("queue-div");
        } else {
          $(this).html("").removeClass("blue-div queue-underflow").addClass("queue-grey");
        }
      });
    }
  });

});
