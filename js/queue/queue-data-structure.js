class QueueDataStructure {
	constructor() {
		this.queueControl = [];
		this.MAX_SIZE = 10;
	}

	display() {
		// ... your code goes here
	}

	canEnqueue() {
		return this.queueControl.length === this.MAX_SIZE ? false : true;
	}

	isEmpty() {
		return this.queueControl.length === 0 ? true : false;
	}

	enqueue(item) {
		if (!this.canEnqueue()) return "Queue Overflow";
		this.queueControl.unshift(item);
		return this.queueControl;
	}

	dequeue() {
		return this.isEmpty() ? "Queue Underflow" : this.queueControl.pop();
	}
}
