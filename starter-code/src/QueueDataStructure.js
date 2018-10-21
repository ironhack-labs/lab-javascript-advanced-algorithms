function QueueDataStructure () {
  this.MAX_SIZE = 10
  this.queueControl = []
  this.isEmpty = function(){
    if (this.queueControl.length > 0) {
      return false
    }
    else {return true}
  }
  this.canEnqueue = function(){
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    }
    else {return false}
  }
  this.enqueue = function(num){
    if(this.queueControl.length < this.MAX_SIZE) {
    this.queueControl.unshift(num)
    return this.queueControl
    }
    else {return "Queue Overflow"}
  }
  this.dequeue = function(){
    if (this.queueControl.length > 0) {
      var i = this.queueControl.length-1
      var last = this.queueControl[i]
      this.queueControl.pop()
      return last;
    }
    else {return "Queue Underflow"}
  }
}
