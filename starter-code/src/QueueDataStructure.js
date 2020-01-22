class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 5
    }

    isEmpty() {
        if (this.queueControl.length <= 0) {
            return true
        }
        return false
    }

    canEnqueue() {
        if (this.MAX_SIZE > this.queueControl.length) {
            return true
        }
        return false
    }

    enqueue(elm) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(elm)
            return this.queueControl
        } else {
            return "Queue Overflow"
        }

    }

    dequeue() {
        if (!this.isEmpty()) {

            return this.queueControl.pop()
        }
        return "Queue Underflow"
    }
}