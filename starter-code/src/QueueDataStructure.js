function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function () {
    if (this.queueControl.length > 0) {
        return false;
    } else {
        return true;
    }
}

QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length >= this.MAX_SIZE) {
        return false

    }
    return true;

}
QueueDataStructure.prototype.enqueue = function (element) {
    this.queueControl.push(element);
    this.queueControl.reverse()
    if (this.queueControl.length === this.MAX_SIZE) {
        return "Queue Overflow"

    }
    return this.queueControl


}
QueueDataStructure.prototype.dequeue = function () {
    if (this.queueControl.length === 0) {
        return "Queue Underflow"
    } else {
        this.queueControl.pop();
    }

}
