class Queue {
	constructor() {
		this.queueControl = [];
		this.MAX_SIZE = 10;
	}

	canEnqueue() {
		if(this.queueControl.length < this.MAX_SIZE){
			return true;
		}return false;

	}

	isEmpty() {
		if (this.queueControl.length === 0) {
			return true
		} return false
	}

	enqueue(item) {
		if (this.canEnqueue()){
			this.queueControl.push(item);
		} else {
			const error = new Error ('QUEUE_OVERFLOW');
			throw error;
		}
		return this.queueControl
	}

	dequeue() {
		if (!this.isEmpty()){
			// const index = this.queueControl.length - 1
			const element = this.queueControl.shift()
			return element
		} else {
			const error = new Error ('QUEUE_UNDERFLOW');
			throw error;
		}
	}

	display() {
		return this.queueControl
	}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;