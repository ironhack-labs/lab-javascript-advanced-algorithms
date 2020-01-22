class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 8
    }

    isEmpty() {
        if (this.queueControl.length == 0) {
            return true
        } else {
            return false
        }
    }

    canEnqueue() {
        if (this.queueControl.length === this.MAX_SIZE) {
            return false
        }
        return true
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
        if (this.queueControl.length > 0) {
            return this.queueControl.pop()
        } else {
            return "Queue Underflow"
        }
    }
}