
class QueueDataStructure {
	constructor() {
		this.MAX_SIZE = 10;
		this.queueControl = [];
		this.size = 0;
	}

	isEmpty() {
		return (this.size === 0);
	}

	canEnqueue() {
		return (this.size < this.MAX_SIZE);
	}

	enqueue(item) {
		if (!this.canEnqueue()) return 'Queue Overflow';

		this.queueControl.unshift(item);
		this.size += 1;
		return this.queueControl;
	}

	dequeue() {
		if (this.isEmpty()) return 'Queue Underflow';
		
		this.size -= 1;
		return this.queueControl.pop();
	}
}