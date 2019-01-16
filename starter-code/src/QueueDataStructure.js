function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 7;
}

QueueDataStructure.prototype.isEmpty = function() {
    return this.queueControl.length === 0;
}

QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length !== this.MAX_SIZE) {
        return true;
    }
    return false;
}

QueueDataStructure.prototype.enqueue = function (item) {
    if (this.queueControl.length < this.MAX_SIZE) {
    this.queueControl.unshift(item);
    return this.queueControl;
    } else {
        return "Queue Overflow";
    }
}

QueueDataStructure.prototype.dequeue = function () {
    if (this.isEmpty()) {
        return 'Queue Underflow';
    } else {
        return this.queueControl.pop();
    }
}