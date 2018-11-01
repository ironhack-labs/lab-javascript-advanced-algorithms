function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function(){
 if(this.queueControl.length <= 0){
   return true } else {return false}
 }

 QueueDataStructure.prototype.canEnqueue = function(){
 if(this.queueControl.length < this.MAX_SIZE) {
  return true } else {return false}
 }


 QueueDataStructure.prototype.enqueue = function(element){
  if(!this.canEnqueue()){
    return "Queue Overflow"
  }
 this.queueControl.unshift(element)
  return this.queueControl
}

QueueDataStructure.prototype.dequeue = function(){
  if(this.isEmpty()){
    return 'Queue Underflow'
  } else {return this.queueControl.pop()}
}
