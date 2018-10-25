function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}
//Constructor's methods
QueueDataStructure.prototype.enqueue = function (value) {
    if (this.canEnqueue()) {
        this.queueControl.push(value);
        return this.queueControl.reverse();
    }
    return "Queue Overflow";
};
    //Check the space of Queue
QueueDataStructure.prototype.canEnqueue = function () {
    return (this.queueControl.length  < this.MAX_SIZE);
};

QueueDataStructure.prototype.dequeue = function () {
    if (this.queueControl.length > 0) {
        return this.queueControl.pop();
    }
    return 'Queue Underflow';
}


QueueDataStructure.prototype.isEmpty = function () {
    return (this.queueControl.length === 0);
};





