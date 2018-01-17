$(document).ready(function () {
  var queue = new QueueDataStructure();
  $('.add-queue').click(function () {
    $('.queue-element.e' + 1).removeClass('overflow');
    console.log('functiona!');
    var valuequeue = $('.input-queue').val();
    if (queue.canEnqueue()) {
      queue.queueControl.unshift(valuequeue);
      var indexqueue = queue.queueControl.length;
      $('.queue-element.e' + indexqueue).removeClass('light').addClass('dark').html('<p class="a"> ' + valuequeue + '</p>');
    }
    if (indexqueue === queue.MAX_SIZE + 1) { $('.queue-element.e9').removeClass('dark').addClass('overflow').text('QUEUE OVERFLOW!!!'); }
  });
  $('.delete-queue').click(function () {
    if (!queue.isEmpty()) {
      var indexqueue = queue.queueControl.length;
      $('.queue-element.e' + indexqueue).removeClass('overflow dark').addClass('light').text('');
      queue.queueControl.shift();
      if (indexqueue === 1) { $('.queue-element.e' + indexqueue).removeClass('light').addClass('overflow').text('QUEUE UNDERFLOW!!!'); indexqueue = queue.MAX_SIZE;
    }
    }
  })
});