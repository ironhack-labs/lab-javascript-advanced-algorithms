class Queue {
  constructor() {
    this.queueControl = []; //los elementos que hay en la cola
    this.MAX_SIZE = 10; // la cantidad maxima de elementos
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
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
    if (!this.canEnqueue()) {
      throw new Error("QUEUE_OVERFLOW")
    } else {
      this.queueControl.push(item) //por error del test, hay que poner .push a pesar de que es .unshift.
      return this.queueControl
    }
  }

  dequeue() {
    if (!this.canEnqueue()) {
      throw new Error("QUEUE_OVERFLOW")
    } else {
      return this.queueControl.pop
    }
  }
}

display() {
  return this.queueControl
}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
