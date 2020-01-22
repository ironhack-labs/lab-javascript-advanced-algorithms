class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty() {
        if (this.queueControl.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    canEnqueue() {
        if (this.MAX_SIZE === this.queueControl.length) {
            return false;
        } else {
            return true;
        }
    }

    enqueue(element) {
        if (this.MAX_SIZE === this.queueControl.length) {
            return "Queue Overflow"
        } else {
            this.queueControl.unshift(element);
        }
        return this.queueControl;
    }

    dequeue() {
        if (this.queueControl.length === 0) {
            return 'Queue Underflow'
        } else {
            this.queueControl.shift(0);
        }
    }
}
