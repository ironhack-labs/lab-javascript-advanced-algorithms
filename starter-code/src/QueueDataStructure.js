function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function(){
    return this.queueControl.length === 0;
  };
  this.canEnqueue = function(){
    return this.queueControl.length === this.MAX_SIZE ? false : true;
  };
  this.enqueue = function(item){
    if (this.queueControl.length === this.MAX_SIZE){
      return "Queue Overflow";
    } else {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
  };
  this.dequeue = function(){
    return this.isEmpty() ? "Queue Underflow" : this.queueControl.pop();
  };
}
