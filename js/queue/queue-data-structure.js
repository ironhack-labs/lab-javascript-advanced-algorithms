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


      if (this.MAX_SIZE <= this.queueControl.length) {
        return false;
      } else {

        return true
      }

  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length == 0) {

      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.MAX_SIZE == this.queueControl.length) {
      return "Stack Overflow"
    } else {
      this.queueControl.push(item);

      this.queueControl[this.queueControl.length - 1]

      return this.queueControl
    }

  }

  dequeue() {
    // ... your code goes here
  }
}
