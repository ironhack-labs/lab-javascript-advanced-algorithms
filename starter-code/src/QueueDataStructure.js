function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 8
  this.isEmpty = () =>{
    if(this.queueControl.length > 0){
      return false
    } else {
      return true
    }
  }
  this.canEnqueue = () =>{
    if (this.queueControl.length === this.MAX_SIZE){
      return false
    }else {
      return true
    }
  }
  this.enqueue = (arg) =>{
    if (this.queueControl.length === this.MAX_SIZE){
      return 'Queue Overflow'
    } else {
      this.queueControl.unshift(arg)
    }
    return this.queueControl
  }
  this.dequeue = () =>{
    if (this.queueControl.length > 0){
      var felem = this.queueControl.shift()
      return felem
    } else {
      return 'Queue Underflow'
    }
  }
}
