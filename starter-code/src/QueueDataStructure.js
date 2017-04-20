function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 2;

}


QueueDataStructure.prototype.isEmpty = function(number) {

  if (this.queueControl.length === 0) {
    return true;
  }
  if (this.queueControl.length > 0) {
    return false;
  }

};

QueueDataStructure.prototype.canEnqueue = function(number) {

  if (this.queueControl.length === this.MAX_SIZE) {
    return false;
  }

  return true;

};

QueueDataStructure.prototype.enqueue = function(number) {

  if (this.queueControl.length === this.MAX_SIZE) {
    return 'Queue Overflow';
  }

  this.queueControl.push(number);
  this.queueControl.reverse();

  return this.queueControl;


};

QueueDataStructure.prototype.dequeue = function(number) {
  if (this.queueControl.length === 0) {
    return 'Queue Underflow';
  }
 return   this.queueControl.reverse()[0];
};

// QueueDataStructure.prototype.canPush = function(number) {
//
// };
