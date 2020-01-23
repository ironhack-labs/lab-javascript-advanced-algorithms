class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 5

    }

    isEmpty() {
        if (this.queueControl.length == 0) {
            return true
        } else {
            return false
        }
    }
    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }

    enqueue(elem) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(elem)
            return this.queueControl
        }
        if (this.queueControl > this.MAX_SIZE) {
            return "Queue Overflow"
        }
    }

    dequeue() {

        if (this.isEmpty()) {
            return "Queue Underflow"
        } else {
            return this.queueControl.pop()
        }
    }
}



