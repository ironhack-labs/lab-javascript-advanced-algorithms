class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 1;
    };
    isEmpty() {
        if (this.queueControl.length === 0) {
            return true;
        } else {
            return false;
        }

    };
    canEnqueue() {
        if (this.queueControl.length === this.MAX_SIZE) {
            return false;
        } else return true;
    };
    enqueue(val) {
        this.queueControl.unshift(val);
        if (this.queueControl.length > this.MAX_SIZE) {

            return "Queue Overflow";
        }
        return this.queueControl;
    };
    dequeue(val) {
        if (this.queueControl.length === 0) {
            return 'Queue Underflow';
        } else
            return this.queueControl.pop(val)

    };
}

