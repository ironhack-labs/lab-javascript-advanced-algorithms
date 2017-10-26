var queue;
var queueElement;
var qTakeBtn = $("#queueTake");
var qAddBtn = $("#queueAdd");
var qOverflowAlert = $("#queue .overflow");
var qUnderflowAlert = $("#queue .underflow");
var enqueueElement = function() {
  $('#queueInput').val('');
  queueElement = '<div><span>';
  queueElement += queue.queueControl[0];
  queueElement += '</span></div>';
  $('#queue .elements').append(queueElement);
};
var dequeueElement = function() {
  $('#queue .elements div:first-child').remove();
};

$(document).ready(function() {
  queue = new QueueDataStructure();

  $("#queueAdd").on('click', function() {
    if (queue.enqueue($('#queueInput').val())) {
      enqueueElement();
    }
    if (queue.queueControl.length == queue.MAX_SIZE) {
      disable(this);
      qOverflowAlert.toggleClass('hide');
    }
    if (queue.queueControl.length == 1) {
      enable(qTakeBtn);
      qUnderflowAlert.addClass('hide');
    }
  });

  $("#queueTake").on('click', function() {
    if (queue.dequeue() != 'Queue Underflow') {
      dequeueElement();
    }
    if (queue.queueControl.length < queue.MAX_SIZE) {
      enable(qAddBtn);
      qOverflowAlert.addClass('hide');
    }
    if (queue.isEmpty()) {
      disable(this);
      qUnderflowAlert.toggleClass('hide');
    }
  });
});
