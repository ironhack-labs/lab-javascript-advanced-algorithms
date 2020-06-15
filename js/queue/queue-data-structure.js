class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
		// ... your code goes here
		return this.queueControl;
  }

  canEnqueue() {
		// ... your code goes here
		if (this.queueControl.length >= this.MAX_SIZE) {
			return false;
		}
		return true;
  }

  isEmpty() {
		// ... your code goes here
		if (this.queueControl.length <= 0) {
			return true;
		}
		return false;
  }

  enqueue(item) {
		// ... your code goes here
		if (this.canEnqueue() === false) {
			return "Queue Overflow";
		} else {
			this.queueControl.unshift(item);
			return this.display();
		}
  }

  dequeue() {
		// ... your code goes here
		if (this.isEmpty() === true) {
			return "Queue Underflow";
		}
		return this.queueControl.pop();
  }
}
