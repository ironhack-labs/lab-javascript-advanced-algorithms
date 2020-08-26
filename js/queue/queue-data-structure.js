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
    if (this.queueControl.length == this.MAX_SIZE - 1)
      return (false)
    return true
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length > 0)
      return false
    return true
  }

  enqueue(item) {
    // ... your code goes here
    if (this.queueControl.length == this.MAX_SIZE - 1)
      return ('Queue Overflow')
    this.queueControl.push(item)

    return this.queueControl.reverse()
  }

  dequeue() {
    // ... your code goes here
    let lastpos = this.queueControl.pop()
    if (this.queueControl.length == 0)
      return ('Queue Underflow')
    return lastpos
  }
}
