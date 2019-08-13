// Initialize variable as an object
let queue = {};

// Define Stack Class
class Queue {
  constructor() {
    this.queueControl = []; // Contains elements of stack object
    this.MAX_SIZE = 16; // Maximum number of elements allowed in stack object
  }

  // Return true if number of elements is 0
  isEmpty() {
    if (this.queueControl.length > 0) return false;
    return true;
  }

  // Return true if there is space to add elements, according to max size
  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) return false;
    return true;
  }

  // Add element to end of stack
  enqueue(queueElement) {
    // Verify if max size not reached
    if (this.canEnqueue() === true) {
      for (let i = this.queueControl.length + 1; i > 0; i--) {
        if (i === 1) this.queueControl[i - 1] = queueElement;
        else this.queueControl[i - 1] = this.queueControl[i - 2];
      }
      return this.queueControl;
    }
    return "Queue Overflow"; // When max size is reached
  }

  // Return last element of stack
  dequeue() {
    if (!this.isEmpty()) return this.queueControl.pop();
    return "Queue Underflow";
  }
}

function QueueDataStructure() {
  queue = new Queue();
  return queue;
}

StackDataStructure();
console.log(stack);
