function QueueDataStructure() {

    this.queueControl = [];
    this.MAX_SIZE = 10;
    
    this.isEmpty = function () {
        return this.queueControl.length === 0;
    };

    this.canEnqueue = function () {
        return this.queueControl.length < this.MAX_SIZE;
    };

    this.enqueue = function (val) {

        if (this.canEnqueue()) {
            this.queueControl.unshift(val);
            return this.queueControl;
        } else {
            return 'Queue Overflow';
        }
    };

    this.dequeue = function (val) {

        if (this.isEmpty()) {
            return 'Queue Underflow';
        } else {
            return this.queueControl.pop(val);
        }
    };
}
