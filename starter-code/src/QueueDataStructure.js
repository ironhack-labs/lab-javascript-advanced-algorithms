// function QueueDataStructure () {
  
// }

class QueueDataStructure {
  constructor() {
    this.queue = [];
    this.maxNumberInQueue = 10;
  }

  checkIfFull() {
    return this.queue === this.maxNumberInStack;
  }

  checkIfEmpty() {
    return this.queue.length === 0;
  }

  addItem(item) {
    if (this.checkIfFull()) {
      return 'Queue is full';
    } else {
      this.queue.unshift(item);
      return this.queue;
    }
  }

  removeItem() {
    if (this.checkIfEmpty()) {
      return 'Queue underflow';
    } else {
      this.queue.pop();
      return this.queue;
    }
  }
}

var queueDataStructure = new QueueDataStructure;


