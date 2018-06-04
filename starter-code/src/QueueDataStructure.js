function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function () {
  if (this.queueControl.length === 0) { return true; }
  return false;
};

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length < this.MAX_SIZE) { return true; }
  return false;
};

QueueDataStructure.prototype.enqueue = function (element) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(element);
    return this.queueControl;
  }
  return 'Queue Overflow';
};

QueueDataStructure.prototype.dequeue = function () {
  if (!this.isEmpty()) { return this.queueControl.pop(); }
  return 'Queue Underflow';
};

QueueDataStructure.prototype.flowControl = function () {
  if (this.queueControl.length === this.MAX_SIZE) {
    $('#queue-overflow').show();
    $('#queue-btn-primary').prop('disabled', true);
  } else if (this.queueControl.length === 0) {
    $('#queue-underflow').show();
    $('#queue-btn-danger').prop('disabled', true);
  } else {
    $('#queue-overflow').hide();
    $('#queue-btn-primary').prop('disabled', false);
    $('#queue-underflow').hide();
    $('#queue-btn-danger').prop('disabled', false);
  }
};

QueueDataStructure.prototype.updateQueueEnqueue = function (queue) {
  $(queue).not('.blue').first().text(this.queueControl[0])
    .addClass('blue');
};

QueueDataStructure.prototype.updateQueueDequeue = function () {
  $('.queue .blue').last().html('<span></span>').removeClass('blue');
}
