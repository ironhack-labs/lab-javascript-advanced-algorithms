// Initialize variable as an object
let queue = {};

// Define Queue Class
class Queue {
  constructor() {
    this.queueControl = []; // Contains elements of queue object
    this.MAX_SIZE = 10; // Maximum number of elements allowed in queue object
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

  // Add element to end of queue
  enqueue(queueElement) {
    // Verify if max size not reached
    if (this.canEnqueue() === true) {
      // Start loop with index incremental and shift from previous place (n) to new place (n+1)
      for (let i = this.queueControl.length; i > -1; i--) {
        // Last iteration places new queue element to index 0
        if (i === 0) this.queueControl[i] = queueElement;
        // Shift from previous place (n) to new place (n+1)
        else this.queueControl[i] = this.queueControl[i - 1];
      }
      return this.queueControl;
    }
    return "Queue Overflow"; // When max size is reached
  }

  // Return last element of queue
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
