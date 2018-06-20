$(function() {
  var queue = new QueueDataStructure();
  var btnAddQueue = $('#queue-add');
  var btnTakeQueue = $('#queue-take');

  var queueWrp = $('#queue');
  queueWrp.find('li').not('.error').html('&nbsp;');

  btnAddQueue.click(function() {
    var element = $('#queue-input').val();

    if (element.length > 0) {
      $('#queue-input').val('');
      hideError(queueWrp.find('.error.under'), btnTakeQueue);

      if (queue.enqueue(element) === 'Queue Overflow') {
        showError(queueWrp.find('.error.over'), $(this));
      } else {
        updateDataStructure(queueWrp, queue.queueControl.slice(), 2, false);
      }
    }
  });

  btnTakeQueue.click(function() {
    hideError(queueWrp.find('.error.over'), btnAddQueue);

    if (queue.dequeue() === 'Queue Underflow') {
      showError(queueWrp.find('.error.under'), $(this));
    } else {
      updateDataStructure(queueWrp, queue.queueControl.slice(), 2, false);
    }
  });
});
