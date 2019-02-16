function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function () {
    return this.queueControl.length === 0;
  };
  this.canEnqueue = function () {
    return this.queueControl.length < this.MAX_SIZE;
  };
}
