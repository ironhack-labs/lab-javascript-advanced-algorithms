function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 90;
  this.isEmpty = function () {
    if(this.queueControl.length != 0){
      return false;
    }
    return true;
  };
  this.canEnqueue = function() {
    if(this.queueControl.length < this.MAX_SIZE ){
      return true;
    }
    return false;
  }
  this.enqueue = function(elem) {
    if(this.canEnqueue() == true){
      this.queueControl.unshift(elem);
      return this.queueControl;
    }
    return 'Queue Overflow';
  }
  this.dequeue = function() {
    if(!this.isEmpty()){
      return this.queueControl.pop();
    }
    return 'Queue Underflow';
  }
}
