class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  getLength() {
    let counter = 0;
    while (this.queueControl[counter] !== undefined) {
      counter++;
    }
    return counter;
  }

  canEnqueue() {
    let length = this.getLength();
    if (length >= this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }

  isEmpty() {
    let length = this.getLength();
    return length === 0;
  }

  enqueue(item) {
    let length = this.getLength();
    let canDo = this.canEnqueue();
    if (canDo) {
      this.queueControl[length] = item;
      return this.queueControl;
    } else {
      throw new Error("QUEUE_OVERFLOW")
    }
  }

  dequeue() {
    let empty = this.isEmpty();
    let length = this.getLength();
    let temporaryArray =[];
    let removedElement = this.queueControl[0];
    if (!empty) {
      for (let i = 1; i < length; i++) {
        temporaryArray[i -1] = this.queueControl[i];
      }
      this.queueControl = temporaryArray;
      return removedElement; 
    } else {
      throw new Error("QUEUE_UNDERFLOW");
    }
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
