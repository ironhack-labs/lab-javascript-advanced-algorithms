$(function() {
  var queue = new QueueDataStructure();
  var btnAddQueue = $('#queue-add');
  var btnTakeQueue = $('#queue-take');

  var queueWrp = $('#queue');
  queueWrp.find('li').not('.error').html('&nbsp;');

  btnAddQueue.click(function() {
    var element = $('#queue-input').val();

    if (element.length > 0) {
      if (queueWrp.is(':visible')) {
        queueWrp.find('.error.under').addClass('d-none');
        btnTakeQueue.attr('disabled', false);
      }
      
      $('#queue-input').val('');

      var result = queue.enqueue(element);

      if (result === 'Queue Overflow') {
        queueWrp.find('.error.over').removeClass('d-none');
        $(this).attr('disabled', true);
      } else {
        queue.queueControl.forEach(function(value, index) {
          queueWrp.find('li:nth-child(' + (index + 3) + ')')
            .removeClass('list-group-item-secondary')
            .addClass('list-group-item-primary')
            .html(value);
        });
      }
    }
  });

  btnTakeQueue.click(function() {
    queueWrp.find('.error.over').addClass('d-none');
    btnAddQueue.attr('disabled', false);

    if (queue.dequeue() === 'Queue Underflow') {
      queueWrp.find('.error.under').removeClass('d-none');
      $(this).attr('disabled', true);
    } else {
      queueWrp.find('li.list-group-item-primary').last()
          .removeClass('list-group-item-primary')
          .addClass('list-group-item-secondary')
          .html('&nbsp;');
    }
  });
});