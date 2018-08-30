function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function () {
    return this.queueControl.length === 0;
}

QueueDataStructure.prototype.canEnqueue = function () {
    return this.queueControl.length < this.MAX_SIZE
}

QueueDataStructure.prototype.enqueue = function (item) {
    this.queueControl.unshift(item);
    if (this.canEnqueue()){
        this.isEmpty();
        return this.queueControl;
    } else {
     return 'Queue Overflow';
    }    
}

QueueDataStructure.prototype.dequeue = function () {
    if (!this.isEmpty()) {
        this.queueControl.shift();
        firstElement = this.queueControl[0]
        return firstElement;
    } return 'Queue Underflow'
}
