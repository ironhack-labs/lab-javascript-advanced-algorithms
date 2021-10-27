class Queue {
	constructor() {
		this.queueControl = [];
		this.MAX_SIZE = 10;
	}

	canEnqueue() {
		if (this.queueControl.length >= this.MAX_SIZE){
			return false;
		}
		return true;
	}

	isEmpty() {
		if (this.queueControl.length === 0) {
			return true;
		}
		return false;
	}

	enqueue(item) {
		if (this.canEnqueue() === false) {
			throw new Error('QUEUE_OVERFLOW');
		}

		this.queueControl.push(item)
		return this.queueControl;
	}

	dequeue() {
		if (this.isEmpty() === true) {
			throw new Error('QUEUE_UNDERFLOW');
		}

		let lastItem = this.queueControl.shift();

		return lastItem;
	}

	display() {
		return this.queueControl;
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
