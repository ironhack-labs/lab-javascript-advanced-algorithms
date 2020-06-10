class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
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
    if (this.canEnqueue() === false) {
      return "Queue Overflow"
    } else {
      this.queueControl.push(item)
      return this.display()
    }
  }

  dequeue() {
    if (this.isEmpty() === true) {
      return "Queue Underflow"
    }
    return this.queueControl.shift()
  }
}

/*shift(): Remove an item from the beginning of an array.
unshift(): Add items to the beginning of an array. */