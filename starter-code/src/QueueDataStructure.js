function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0) return true;

  return false;
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl[this.MAX_SIZE - 1] == undefined) return true;

  return false;
};

QueueDataStructure.prototype.enqueue = function(val) {
  if (!this.canEnqueue()) return "Queue Overflow";

  this.queueControl.unshift(val);
  return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) return "Queue Underflow";

  return this.queueControl.pop();
};
