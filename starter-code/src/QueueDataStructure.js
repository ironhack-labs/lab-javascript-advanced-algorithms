function QueueDataStructure() {
    this.MAX_SIZE = 4
    this.queueControl = []
    this.isEmpty = function () {
        if (this.queueControl.length > 0) {return false};
        return true;
    }
    this.canEnqueue = function () {
        if (this.queueControl.length >= this.MAX_SIZE) {return false};
        return true;
     }
    this.enqueue = function (value) {
        if (this.queueControl.length >= this.MAX_SIZE) {return "Queue Overflow"};
        this.queueControl.unshift(value);
        return this.queueControl;
    }
    this.dequeue = function () {
        if (this.queueControl.length === 0) {return "Queue Underflow"};
        return this.queueControl.pop()
    }
}
