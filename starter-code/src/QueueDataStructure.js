function QueueDataStructure() {
      this.queueControl = [];
      this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.canEnqueue = function () {
      return (this.queueControl.length < this.MAX_SIZE);
};
QueueDataStructure.prototype.isEmpty = function () {
      return (this.queueControl.length == 0);
};
QueueDataStructure.prototype.enqueue = function (stack) {
      if (this.canEnqueue()) {
            this.queueControl.unshift(stack);
      } else {
            return 'Queue Overflow';
      }
      return this.queueControl;
};
QueueDataStructure.prototype.dequeue = function () {
      if (!this.isEmpty()) {
            return this.queueControl.pop();
      } else {
            return 'Queue Underflow';
      }
};
