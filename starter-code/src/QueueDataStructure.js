class QueueDataStructure extends Array {
  constructor() {
    super();
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    };
  }
  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false;
    } else {
      return true;
    };
  }
  enqueue(item) {
    if (this.queueControl.length >= this.MAX_SIZE) {
      return 'Queue Overflow';
    };
    this.queueControl.unshift(item);
    return this.queueControl;
  }
  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow';
    }
    let index = this.queueControl.length - 1;
    return this.queueControl[index];
  }
  
};

/**********************************/
/*           VALIDATION           */
/**********************************/

// queue = new QueueDataStructure();

// console.log(queue);

// console.log(queue.queueControl);

// console.log(queue.isEmpty());

// console.log(queue.canEnqueue());

// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));
// console.log(queue.enqueue(4));

// console.log(queue.dequeue());