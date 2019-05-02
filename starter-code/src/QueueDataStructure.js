class QueueDataStructure  { 

  constructor(){
    
    this.queueControl = [],
    this.MAX_SIZE = 10

  }

    isEmpty() { 
      if (this.queueControl.length == 0) {
        return true
      } else { return false}
    }
  
    canEnqueue() {
      if(this.queueControl.length < this.MAX_SIZE) {
        return true
      }  
      else if (this.queueControl.length == this.MAX_SIZE) { 
        return false }
    }

    enqueue(element) {
      if (this.canEnqueue()){
        this.queueControl.unshift(element)
        return this.queueControl
      } else if(!this.canEnqueue()){
        return "Queue Overflow"
      }
    }

    dequeue() {
      let lastElm = this.queueControl[this.queueControl.length-1]
      if(this.isEmpty()){
        return 'Queue Underflow'
      } else {
        this.queueControl.pop()
        return lastElm 
      }
    }
  }
