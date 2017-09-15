var QueueDataStructure = function () {
	this.queueControl = [];
	this.MAX_SIZE = 10;
};

QueueDataStructure.prototype.isEmpty = function() {
		if (this.queueControl.length === 0)
			return true
		return false
	}

QueueDataStructure.prototype.canEnqueue = function() {
		if (this.queueControl.length < this.MAX_SIZE)
			return true
		return false
	}

QueueDataStructure.prototype.enqueue = function(arg) {
		this.queueControl.unshift(arg)
		if (this.queueControl.length > this.MAX_SIZE) {
			this.dequeue(arg)
			return "Queue Overflow"
		}
		return this.queueControl.slice((this.queueControl.length-1),1).reverse()
	}

QueueDataStructure.prototype.dequeue = function() {
		if (this.queueControl.length === 0)
			return "Queue Underflow"
		return 	this.queueControl.pop()
	}

