class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
    
  }

  canEnqueue() {
    // ... your code goes here
    if (this.canEnqueue.length < this.MAX_SIZE) {
      return true
    }
    return false      
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl != 0) {
      return false
    }

    return true
    
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()) {
      this.queueControl.unshift(item)
       return this.queueControl
    } else {
      return 'Queue Overflow'
    }

   
  }

  dequeue() {
    // ... your code goes here
    if (!this.isEmpty()) {
			return this.queueControl.shift();
		} else {
			return "Queue Underflow";
		}
  }
}
