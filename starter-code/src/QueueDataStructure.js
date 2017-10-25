// Queue Data Structure contructor function
function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
    return this.queueControl == false ? true : false;
};

QueueDataStructure.prototype.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
};

QueueDataStructure.prototype.enqueue = function(element) {
    if (this.queueControl.length < this.MAX_SIZE) {
        this.queueControl.unshift(element);
        return this.queueControl;
    } else {
        return 'Queue Overflow';
    }
};

QueueDataStructure.prototype.dequeue = function() {
    if (this.queueControl.length > 0) {
        return this.queueControl.pop();
    } else {
        return 'Queue Underflow';
    }
};
