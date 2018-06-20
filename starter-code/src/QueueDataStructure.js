function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function(){
    return this.queueControl.length == 0
  }
  this.canEnqueue = function(){
    return this.queueControl.length <  this.MAX_SIZE
  }
  this.enqueue = function(element){
    if(!this.canEnqueue()){
      return "Queue Overflow"
    } else{
      this.queueControl.unshift(element)
      return this.queueControl
    }
  }
  this.dequeue = function(){
    if(!this.isEmpty()){
      return this.queueControl.pop()
    } else{
      return "Queue Underflow"
    }
  }
}
