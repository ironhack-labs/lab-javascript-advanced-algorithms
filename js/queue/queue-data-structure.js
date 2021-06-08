class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    // ... your code goes here
    return this.queueControl.length < 1 ? true : false;
  }

  enqueue(item) {
    // ... your code goes here

    if (this.queueControl.length === this.MAX_SIZE) throw 'QUEUE_OVERFLOW';

    this.queueControl.push(item);

    return [item];
  }

  dequeue() {
    if (!this.queueControl.length) throw 'QUEUE_UNDERFLOW';
    // ... your code goes here
    return this.queueControl.shift();
  }

  display() {
    // ... your code goes here

    // console.log(this);
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
