class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {

    if (this.queueControl == this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  isEmpty() {

    if (this.queueControl == 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {

    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      //¿Hay o no desbordamiento?? Revisar al completar
      //throw new Error("QUEUE_OVERFLOW");
      return 'Queue Overlow'
    }

  }

  dequeue() {

    if (this.isEmpty) {

      return this.queueControl.shift()

    } else {
      //¿Hay o no desbordamiento?? Revisar al completar
      //throw new Error('QUEUE_UNDERFLOW')
      return 'Queue Underflow'

    }
  }

  display() {

    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
