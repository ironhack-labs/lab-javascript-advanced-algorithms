function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function(){
    return (this.queueControl.length === 0)
  }
  this.canEnqueue = function(){
    return (this.isEmpty());
  }
  this.enqueue = function(column){
    if (this.queueControl.length === this.MAX_SIZE && this.MAX_SIZE !=0) {
      return 'Queue Overflow';
    }
    this.queueControl.unshift(column);
    return this.queueControl;
  }
  this.dequeue = function(){
    if (this.isEmpty()){
      return "Queue Underflow";
    } else {
      return this.queueControl.pop();
    }
  }
}