class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10
    }

    isEmpty() {
        return this.queueControl.length === 0

    }

    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    }
    enqueue(err) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(err);
            return this.queueControl;
        } else {
            return 'Queue Overflow';
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop()
        }
    }
}

