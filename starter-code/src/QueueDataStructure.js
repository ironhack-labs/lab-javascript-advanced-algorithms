function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function() {
    return (this.queueControl.length === 0)
  };
  this.canEnqueue = function() {
    return (this.queueControl.length < this.MAX_SIZE)
  };

  this.enqueue = function(element) {
    if (this.canEnqueue()){
      this.queueControl.push(element);
      this.queueControl.reverse()
      return this.queueControl.slice(-1);
    } else {
      return 'Queue Overflow';
    };
  };

  this.dequeue = function(){
    if (this.queueControl.length !== 0){
      var lastItem = this.queueControl.slice(-1)
      this.queueControl = this.queueControl.slice(0, this.queueControl.length-1);
      return parseInt(lastItem);
    } else {
      return 'Queue Underflow'
    }
  };
}
