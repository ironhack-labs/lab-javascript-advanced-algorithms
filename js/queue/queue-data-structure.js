class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE){
      return true
    } else {
      return false
    }
  }
  

  isEmpty() {
    if (this.queueControl.length === 0){
      return true
    } else {
      return false
    }
   }
  

  enqueue(item) {
    let result = this.canEnqueue()
   if (result) {
    this.queueControl.push(item)
   } else {
     throw new Error('QUEUE_OVERFLOW') 
  }
    return this.queueControl
  }

  dequeue() {
    let result = this.isEmpty()
    if (result) {
     throw new Error('QUEUE_UNDERFLOW') 
    } else {
      return this.queueControl.shift()
      
   }
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
