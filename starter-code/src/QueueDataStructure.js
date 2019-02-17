function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=10;
  this.isEmpty = function(){
    if (this.queueControl.length!=0){
      return false
    }
    return true
  }
  this.canEnqueue = function(){
    if (this.queueControl.length < this.MAX_SIZE){
      return true
    }
    return false
  }
  this.enqueue = function (item){
    if (this.canEnqueue() == true) {
      this.queueControl.unshift(item); 
      return this.queueControl
    }
    return 'Queue Overflow'
 }
 this.dequeue = function (){
  if (this.isEmpty() == false){
    return this.queueControl.pop()
  }
  return 'Queue Underflow'
}
  
}
