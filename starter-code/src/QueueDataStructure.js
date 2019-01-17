class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }
    isEmpty() {
        return this.queueControl.length === 0 ? true : false
    }
    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE ? true : false
    }

    enqueue(element) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(element);
        }
        else {
            return "Queue Overflow"
        }
        return this.queueControl;
    }
    dequeue(element) {
        if (this.isEmpty() === false) {
            return this.queueControl.pop(element);
        }
        else {
            return "Queue Underflow"
        }
    }
}
