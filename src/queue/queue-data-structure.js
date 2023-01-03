class Queue {
	constructor() {
		this.queueControl = [];
		this.MAX_SIZE = 10;
	}

	canEnqueue() {
		if (this.queueControl.length < this.MAX_SIZE) return true;
		if (this.queueControl.length === this.MAX_SIZE) return false;
	}

	isEmpty() {
		if (!this.queueControl.length) return true;
		if (this.queueControl.length > 0) return false;
	}

	enqueue(item) {
		if (this.canEnqueue()) {
			this.queueControl.unshift(item);
			return this.queueControl;
		} else {
			throw new Error('QUEUE_OVERFLOW');
		}
	}

	dequeue() {
		if (!this.isEmpty()) {
			return this.queueControl.pop();
		} else {
			throw new Error('QUEUE_UNDERFLOW');
		}
	}

	display() {
		return this.queueControl;
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
