class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl
  }


  canEnqueue() {
    if (this.queueControl < this.MAX_SIZE) {
      return true
    } else {
      return false
    }

  }
  // ... your code goes here


  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item) //<=//Debe de incrementar un elemento
    } else {
      return 'Queue Overflow'
    }
    return this.display()
  }

  dequeue() {

    if (this.isEmpty()) {
      return 'Queue Underflow'
    } else {
      return this.queueControl.pop() // Debe eliminar un elemento
    }

    return this.display()
  }
}
// ... your code goes here