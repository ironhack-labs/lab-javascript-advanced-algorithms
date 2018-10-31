function QueueDataStructure() {

    this.queueControl = [],
    this.MAX_SIZE = 9;
};

QueueDataStructure.prototype.isEmpty = function () {

    if (this.queueControl.length == 0) return true;
    return false;

};

QueueDataStructure.prototype.canEnqueue = function () {

    if ((this.queueControl.length < this.MAX_SIZE)) return true;

    return false;


};

QueueDataStructure.prototype.enqueue = function (newElement) {
    if (this.canEnqueue()) {
        this.queueControl.unshift(newElement);
        return this.queueControl;
    } else {
        return 'Queue Overflow';
    }

};

QueueDataStructure.prototype.dequeue = function (newElement) {
    if (!this.isEmpty()) {
        this.queueControl.shift(newElement);
        return this.queueControl.pop()
    } else {
        return 'Queue Underflow';
    }
};

