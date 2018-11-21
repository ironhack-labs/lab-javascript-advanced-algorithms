function QueueDataStructure(){
  this.queueControl = [];
  this.MAX_SIZE = 8;

  QueueDataStructure.prototype.isEmpty = function() {
    return this.queueControl.length == 0 ? true : false;
      }
  QueueDataStructure.prototype.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
      }
  QueueDataStructure.prototype.enqueue = function(newElement) {
    if (this.queueControl.length == this.MAX_SIZE) {
      return 'Queue Overflow';
      }
    else {
      this.queueControl.unshift(newElement)
      return this.queueControl;
      }
    }

  QueueDataStructure.prototype.dequeue = function() {
    if (this.queueControl.length == 0) {
      return 'Queue Underflow'
    }
    else {
      return this.queueControl.pop();
    }
  }
}

var queue = new QueueDataStructure();
