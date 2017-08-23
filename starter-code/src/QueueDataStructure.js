function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 8
}

QueueDataStructure.prototype.isEmpty = function (){
  return this.queueControl.length == 0 ? true : false
}

QueueDataStructure.prototype.canEnqueue = function (){
  return (this.queueControl.length == this.MAX_SIZE) ? false : true
}

QueueDataStructure.prototype.enqueue = function (element){
  if(this.queueControl.length == this.MAX_SIZE) return 'Queue Overflow'
  else {
    this.queueControl.unshift(element)
    return this.queueControl
  }
}

QueueDataStructure.prototype.dequeue = function (){
  return (this.queueControl.length == 0) ? 'Queue Underflow' : this.queueControl.pop()

}
