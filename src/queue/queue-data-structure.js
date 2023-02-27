class Queue {
	constructor() {
		this.queueControl = [];
		this.MAX_SIZE = 10;
	}

	canEnqueue() {
		if (this.queueControl < this.MAX_SIZE) {
			return true;
		} else return false;
	}

	isEmpty() {
		if (this.queueControl.length > 0) {
			return false;
		} else return true;
	}

	enqueue(item) {
		const canAdd = this.canEnqueue();
		if (canAdd) {
			this.queueControl.push(item);

			return this.queueControl;
		} else throw new Error('QUEUE_OVERFLOW');
	}

	dequeue() {
		const isEmpty = this.isEmpty;
		if (!isEmpty) {
			return this.queueControl.shift();
		} else throw new Error('QUEUE_UNDERFLOW');
	}

	display() {
		return this.queueControl;
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
