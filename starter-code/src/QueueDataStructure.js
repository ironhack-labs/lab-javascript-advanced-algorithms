function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 10


  this.isEmpty = function() {
    if(this.queueControl.length === 0){
      return true
    } else {
      return false
    }
  }
  this.canEnqueue = function() {
    if(this.queueControl.length < this.MAX_SIZE){
      return true
    } else {
      return false
    }
  }

  this.enqueue = function(x) {
    if(this.canEnqueue()){
      this.queueControl.unshift(x)
      return this.queueControl
  } else {
      return 'Queue Overflow'
  }
  }
  this.dequeue = function() {
    if(!this.isEmpty()) {
      return this.queueControl.pop()
    } else {
      return "Queue Underflow"
    }
  }
}
