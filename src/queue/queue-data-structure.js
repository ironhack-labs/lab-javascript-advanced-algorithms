class Queue {
	constructor() {
		this.queueControl = [];
		this.MAX_SIZE = 10;
	}

	canEnqueue() {
		if (this.queueControl.length === this.MAX_SIZE) {
			return false;
		} else {
			return true;
		}
	}

	isEmpty() {
		if (this.queueControl.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	enqueue(item) {
		if (this.canEnqueue()) {
			this.queueControl.push(item);
			return this.queueControl;
		} else {
			// throw new Error('QUEUE_OVERFLOW');
			return 'Queue Overflow';
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			// throw new Error('QUEUE_UNDERFLOW');
			return 'Queue Underflow';
		} else {
			return this.queueControl.shift();
		}
	}

	display() {
		return this.queueControl;
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
