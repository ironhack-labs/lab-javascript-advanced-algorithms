function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 5
  this.isEmpty = function(){
    if(this.queueControl.length === 0){
      return true
    } else {
      return false
    }
  }
  this.canEnqueue = function(){
    if(this.queueControl.length < this.MAX_SIZE){
      return true
    } else {
      return false
    }
  }
  this.enqueue = function(item){
    if(this.queueControl.length === this.MAX_SIZE){
      return "Queue Overflow"
    } else {
      this.queueControl.splice(0,0,item)
      return this.queueControl
    }
  }
  this.dequeue = function(){
    if(this.queueControl.length === 0){
      return "Queue Underflow"
    } else {
      return this.queueControl.splice(this.queueControl.length-1,1)[0]
    }
  }
}
