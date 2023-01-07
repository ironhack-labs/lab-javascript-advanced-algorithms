class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length<this.MAX_SIZE){
      return true
    }
    else if (this.queueControl.length>=this.MAX_SIZE){
      return false
  }
  }
  isEmpty() {
    if(this.queueControl.length===0){
      return true
    }
    else if (10>=this.queueControl.length>0){
      return false
    }
  }

  enqueue(item) {
    if(this.canEnqueue()===true){
      this.queueControl.push(item)
      return this.queueControl
    }
    
    else if(this.canEnqueue()===false){
      
      throw new Error('QUEUE_OVERFLOW')
      
    }
  }

  dequeue(item) {
    if (this.isEmpty()===false){
      return this.queueControl.shift(item)
      
    }
    else if(this.isEmpty()===true){
      throw new Error('QUEUE_UNDERFLOW')
    }
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;

let queue1 = new Queue ();

queue1.enqueue(5)
queue1.dequeue(5)
queue1.dequeue(5)
queue1.dequeue(5)
queue1.dequeue(5)
queue1.dequeue(5)
queue1.dequeue(5)
queue1.dequeue(5)
queue1.dequeue(5)
queue1.dequeue(5)

console.log(queue1)
console.log(queue1.canEnqueue());