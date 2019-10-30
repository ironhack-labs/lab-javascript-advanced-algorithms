class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        return this.queueControl.length <= 0;
    }

    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE;
    }

    enqueue(item) {
        if (this.queueControl.length < this.MAX_SIZE) {
            this.queueControl.unshift(item);
            this.isEmpty();
            return this.queueControl;
        } else {
            return `Queue Overflow`;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return `Queue Underflow`;
        } else {
            return this.queueControl.pop();
        }
    }

}