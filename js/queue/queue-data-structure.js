class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false
  }

  isEmpty() {
    return this.queueControl.length == 0 ? true : false
  }

  enqueue(item) {
    // ... your code goes here
  }

  dequeue() {
    // ... your code goes here
  }
}
