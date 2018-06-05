$(document).ready(function () {
  var queueStructure = new QueueDataStructure();
  var queue = $('.queue-element').not('.red');

  queueStructure.flowControl();

  // ENQUEUE
  $('#queue-btn-primary').click(function () {
    var elementName = $('#queue-input').val();
    if (elementName.length > 0) {
      queueStructure.enqueue(elementName);
      queueStructure.flowControl();
      queueStructure.updateQueueEnqueue(queue);
    }
  });

  // DEQUEUE
  $('#queue-btn-danger').click(function () {
    $('#dequeuedElement').text(queueStructure.dequeue());
    queueStructure.flowControl();
    queueStructure.updateQueueDequeue();
  });
});
