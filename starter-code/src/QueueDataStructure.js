class QueueDataStructure {
  constructor() {
    this.queueControl = [],
      this.MAX_SIZE = 100
  }

  isEmpty() {
    return !this.queueControl.length
  }
  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE

  }
  enqueue(element) {

    if (this.canEnqueue()) {
      this.queueControl.unshift(element)
      return this.queueControl
    } else return `Queue Overflow`

  }
  dequeue() {
    if (!this.isEmpty()) return this.queueControl[this.queueControl.length - 1]
    else return `Queue Underflow`
  }

}