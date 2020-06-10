class QueueDataStructure {
  constructor(queueControl, MAX_SIZE) {
    this.queueControl = []
    this.MAX_SIZE = 10
    this.isEmpty()
  }

  display() {
    return this.queueControl
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if (this.queueControl.length == 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item)

      return this.display()
    } else {
      return "Queue Overflow"
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow"
    } else {
      let lastElement = this.queueControl[this.queueControl.length - 1]

      this.queueControl.pop()

      return lastElement
    }
  }
}
