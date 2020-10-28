class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    return this.queueControl.length === 0
  }

  enqueue(item) {     // ... para poner
    if (this.canEnqueue() === true) {
      this.queueControl.push(item)
      this.queueControl.reverse()
      return this.queueControl
    } if (this.queueControl.length >= this.MAX_SIZE) {
      return "Queue Overflow"
    }
  }

  dequeue() {         // ... para quitar
    if (this.isEmpty())
      return "Queue Underflow"
    return this.queueControl.shift()
  }
}
