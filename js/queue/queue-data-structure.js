class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false

  }

  isEmpty() {
    return this.queueControl.length === 0 ? true : false
  }

  enqueue(item) {
    let initialState2 = this.canEnqueue()
    if (this.canEnqueue()) this.queueControl.unshift(item)
    return initialState2 ? this.queueControl : "Queue Overflow"
  }

  dequeue() {
    return this.isEmpty() ? "Queue Underflow" : this.queueControl.pop()

  }
}
