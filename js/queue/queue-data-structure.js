class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }

  canEnqueue() {
    return this.queueControl < this.MAX_SIZE ? true : false
    // ... your code goes here
  }

  isEmpty() {

    return this.queueControl.length === 0 ? true : false
    // ... your code goes here
  }

  enqueue(item) {
    // ... your code goes here

    if (this.queueControl.length < this.MAX_SIZE) {
      this.queueControl.unshift(item)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
    }
  
  
  

  dequeue() {
    // ... your code goes here
    if (this.isEmpty() === true) {
      return "Queue Underflow"
    }
    return this.queueControl.pop()
    }
  }

