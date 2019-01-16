function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 0
  this.isEmpty = function(){
    if(this.queueControl.length === 0) return true
    else return false
  }
  this.canEnqueue = function(){
    if(this.MAX_SIZE > this.queueControl.length ) return false
    else return true
  }

  this.enqueue = function(element){
    if(this.canEnqueue() === true){
      this.queueControl.unshift(element)
      return this.queueControl
    }else{
      return "Queue Overflow"
    }
  }
  this.dequeue = function(){
    if(this.isEmpty() === false) return this.queueControl.pop()
    else return "Queue Underflow"
  }
}
