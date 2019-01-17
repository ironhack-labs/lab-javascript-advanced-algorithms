function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 6;

  this.isEmpty = function(){
    if (this.queueControl.length == 0) return true;
    return false;
  }
  this.canEnqueue = function(){
    if (this.queueControl.length == 0) return true;
    return false;
  }
  this.enqueue = function(arg){
    if (this.queueControl.length == this.MAX_SIZE) return "Queue Overflow";
    this.queueControl.unshift(arg);
    return this.queueControl
  };
  this.dequeue = function(){
    if (this.isEmpty()) return 'Queue Underflow';
    else {
      return this.queueControl.pop();
    }
  }
}
