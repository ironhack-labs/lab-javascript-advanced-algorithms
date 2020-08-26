class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    if(this.queueControl.length == this.MAX_SIZE)
        return false

    else if (this.queueControl.length < 10)
        return true
  }

  isEmpty() {
    if (this.queueControl <= 0)
    return true
  else
  return false
  }

  enqueue(item) {
    if (this.queueControl.length >= this.MAX_SIZE){  
      return 'Queue Overflow'
    }
    else
      this.queueControl.push(item)
    return this.queueControl.reverse()
  }

  dequeue() {
     
    if (this.queueControl.length <= 0) 
      return 'Queue Underflow'

    return this.queueControl[this.queueControl.length - 1]
    
  }
}
