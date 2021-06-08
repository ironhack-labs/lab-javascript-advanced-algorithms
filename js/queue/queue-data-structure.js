class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.getSize() < this.MAX_SIZE
    // console.log(this.getSize())
  }

  isEmpty() {
    return !this.getSize()
  }

  enqueue(item) {
    if( !this.canEnqueue() ){
      console.log('QUEUE_OVERFLOW')
      throw new Error('QUEUE_OVERFLOW');
    }
    this.queueControl.push(item)
    return this.queueControl

  }

  dequeue() {
    if(this.isEmpty()){
      throw new Error('QUEUE_UNDERFLOW');
    }
    return this.queueControl.shift()
  }

  display() {
    return this.queueControl
  }  

  getSize(){
    return this.queueControl.length
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
