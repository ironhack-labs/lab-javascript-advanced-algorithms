class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 8;
    }
    isEmpty() {
        return this.queueControl.length === 0;
    }

    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE
    }
    enqueue(element) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(element);
            return this.queueControl;
        } else {
            return "Queue Overflow"
        }
    }
    dequeue(element) {
        if (!this.isEmpty()) {
            return this.queueControl.pop(element);
        } else {
            return "Queue Underflow"
        }

    }


}