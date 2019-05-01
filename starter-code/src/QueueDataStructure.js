class QueueDataStructure {
	constructor() {
		(this.queueControl = []), (this.MAX_SIZE = 30);
	}

	isEmpty() {
		if (this.queueControl.length > 0) {
			return false;
		} else {
			return true;
		}
	}

	canEnqueue() {
		if (this.queueControl.length === this.MAX_SIZE) {
			return false;
		} else {
			return true;
		}
	}

	enqueue(x) {
		if (this.canEnqueue()) {
			this.queueControl.unshift(x);
			return this.queueControl;
		} else {
			return 'Queue Overflow';
		}
	}

	dequeue(x) {
		if (this.isEmpty()) {
			return 'Queue Underflow';
		} else {
			return this.queueControl.pop();
		}
	}
}
