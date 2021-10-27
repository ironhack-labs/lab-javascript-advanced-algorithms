class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE){
      return true
    }
  
    return false
  }

  
  isEmpty() {
  
    if (this.queueControl.length === 0) {
      return true
     }
    return false
  }
  

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      
    } else {
      throw new Error('QUEUE_OVERFLOW') 
    }
    
    return this.queueControl.reverse();
  }
 
  dequeue() {
    
    if (this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW') 
    } 
    else if (this.isEmpty() === false){
      let lastElement = this.queueControl.shift();
      return lastElement;
    }



    /* if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW') 
    } else {
      let lastElement = this.queueControl.pop();
      return lastElement;
    } */

  }

  display() {
    return this.queueControl;
  }  
}




// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
