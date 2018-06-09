function QueueDataStructure() {
	this.queueControl = [];
	this.MAX_SIZE = 8;

	// add an item to the front of the list
	this.enqueue = data => {
		if (!this.canEnqueue()) return `Queue Overflow`;
		else {
			this.queueControl.unshift(data);
			// this.queueControl.push(data);
			return this.queueControl;
		}
	};
	// remove an item to the end of the list
	this.dequeue = () => {
		if (this.queueControl.length === 0) return `Queue Underflow`;
		else return this.queueControl.pop();
	};
	// check if queue is empty
	this.isEmpty = () => {
		return this.queueControl.length === 0;
	};
	// enqueue data in the queue
	this.canEnqueue = () => this.queueControl.length < this.MAX_SIZE;
}
