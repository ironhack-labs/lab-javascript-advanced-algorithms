class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10
    }

    isEmpty() {
        return this.queueControl.length == 0 ? true : false
    }

    canEnqueue() {
        return this.MAX_SIZE != this.queueControl.length ? true : false
    }

    enqueue(val) {
        if (this.canEnqueue()) {
            this.isEmpty()
            this.queueControl.unshift(val)
            return this.queueControl
        } else {
            return "Queue Overflow"
        }
    }

    dequeue() {
        return !this.isEmpty() ? this.queueControl.pop() : "Queue Underflow"
    }
}