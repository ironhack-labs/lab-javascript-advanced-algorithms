
class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 12;
  }

  isEmpty() {
    return !Boolean(this.queueControl.length)
  }

  canEnqueue() {
    return this.queueControl.length !== this.MAX_SIZE
  }

  dequeue(element) {
    return (!this.isEmpty()) ? this.queueControl.pop() : 'Queue Underflow'
  }

  enqueue(element) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(element)
      return this.queueControl
    }
    else return 'Queue Overflow'
  }
}