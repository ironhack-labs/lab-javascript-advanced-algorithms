class QueueDataStructure  {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        if (this.queueControl.length >= 1) {
            return false
        }
        return true
    }
    canEnqueue() {
        if (this.queueControl.length === this.MAX_SIZE) { return false }
        return true
    }

    enqueue(element) {
        if (this.queueControl.length === this.MAX_SIZE) {
            return 'Queue Overflow'
        }
        this.queueControl.unshift(element)
        return this.queueControl
    }

    dequeue() {
        if (this.queueControl.length <= 0) {
            return 'Queue Underflow'
        }
        return this.queueControl.pop()
    }
}