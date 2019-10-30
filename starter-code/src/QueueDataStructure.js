class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10
    }
    isEmpty() {
        return (this.queueControl.length == 0)
    }
    canEnqueue() {
        return (this.queueControl.length < this.MAX_SIZE)
    }
    enqueue(arg) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(arg)
            return (this.queueControl)
        } else {
            return ("Queue Overflow")
        }
    }
    dequeue() {
        if (this.queueControl.length) {
            return (this.queueControl.pop())
        } else {
            return ("Queue Underflow")
        }
    }

}