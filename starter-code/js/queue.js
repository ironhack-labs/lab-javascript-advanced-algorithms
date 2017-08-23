$(document).ready(function() {

  $('.add-queue').on("click", function() {
    var add = $('.form-queue').val();
    if (queue.canEnqueue()) {
      queue.enqueue(add);
      console.log(queue.queueControl);
      }
      else {
      $('.content-queue:first-child').html("Queue Overflow").addClass("overflow");
    }

      $('.content-queue').children().each(function(index) {
      $(this).html(queue.queueControl[index]).addClass("blue-div");
    });

  });

  $('.take-queue').on("click", function() {
    if (queue.isEmpty()) {
      $('.content-queue:last-child').html("Queue Underflow").addClass("overflow");
    } else {
      queue.dequeue();
      console.log(queue.queueControl);

      $('.content-queue').children().each(function(index) {
        if (queue.queueControl[index]) {
          $(this).html(queue.queueControl[index]).addClass("blue-div");
        } else {
          $(this).html("").removeClass("blue-div");
        }
      });
    }
  });

});
