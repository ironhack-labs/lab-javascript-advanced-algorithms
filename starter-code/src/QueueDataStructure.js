function QueueDataStructure () {
  this.queueControl =[];
  this.MAX_SIZE = 10;
  this.isEmpty = function(){
    return this.queueControl.length == 0;
  }
  this.canEnqueue = function(){
    return this.queueControl.length < this.MAX_SIZE;
  }
  this.enqueue = function(e){
    var max = this.canEnqueue();
    if(max){
      this.queueControl.unshift(e)
      return this.queueControl
    }
    return 'Queue Overflow'
  }
  this.dequeue = function(){
    var empty =this.isEmpty()
    if(empty) return 'Queue Underflow';
    return this.queueControl.pop();
  }
}
