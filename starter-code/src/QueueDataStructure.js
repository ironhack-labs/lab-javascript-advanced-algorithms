//FIFO (First-in First-out)
function QueueDataStructure () {
	this.queueControl = [];
	this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function(){
	if (this.queueControl.length === 0) {
		return true;
	} else {
		return false;
	}
}

QueueDataStructure.prototype.canEnqueue = function(){
	if (this.queueControl.length < this.MAX_SIZE) {
		return true;
	} else {
		return false;
	}
}

QueueDataStructure.prototype.enqueue = function(element){
	//First In
	if(this.canEnqueue() === false) {
		return 'Queue Overflow';
	} else {
		this.queueControl.unshift(element);
		return this.queueControl;
	}
}

QueueDataStructure.prototype.dequeue = function(){
	//First Out
	if (this.isEmpty()) {
		return 'Queue Underflow';
	}
	return this.queueControl.pop();
}