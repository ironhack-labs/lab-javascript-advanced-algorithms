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
      queueList[queue.MAX_SIZE - queue.queueControl.length].innerText = x
      queueList[queue.MAX_SIZE - queue.queueControl.length].setAttribute('class','queue-item queue-element')
      queueUnder.setAttribute('class','error-queue')
      return this.queueControl
  } else {
      return 'Queue Overflow'
  }
  }
  this.dequeue = function(x) {
    if(!this.isEmpty()) {
      queueList[queue.queueControl.length].innerText = ''
      queueList[queue.MAX_SIZE - (queue.MAX_SIZE-queue.queueControl.length)].setAttribute('class','queue-element')
      return this.queueControl.pop()
    } else {
      return "Queue Underflow"
    }
  }
}
