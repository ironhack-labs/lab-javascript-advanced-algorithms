function QueueDataStructure (queueControl) {
      this.queueControl = [];
        this.MAX_SIZE = 100;
}

QueueDataStructure.prototype.isEmpty = function (elm) {
      if (this.queueControl.length === 0) {
      return true;
      }
      else {return false;}
    };

QueueDataStructure.prototype.canEnqueue = function () {
        if(this.queueControl.length === this.MAX_SIZE) {
          return false;
        }
        if (this.queueControl.length < 100) {
        return true;
      }
      };

QueueDataStructure.prototype.enqueue = function (elm) {
if (this.queueControl.length === this.MAX_SIZE)
  return 'Queue Overflow';

  this.queueControl.unshift(elm);
  return this.queueControl;
 };

QueueDataStructure.prototype.dequeue = function (elm) {
  if (this.queueControl.length === 0)
    return 'Queue Underflow';

  return this.queueControl.pop();
 };
