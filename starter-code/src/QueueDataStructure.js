class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 20
    }
    isEmpty() {
        return this.queueControl.length ? false : true
    }
    canPush() {
        if (this.queueControl.length < this.MAX_SIZE) {
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
    enqueue(elm) {
        if (this.queueControl.length < this.MAX_SIZE) {
            this.queueControl.unshift(elm)
            return this.queueControl
        } else if (this.queueControl.length == this.MAX_SIZE) {
            return ("Queue Overflow")
        }
    }
    dequeue(elm) {

        if (!this.queueControl.length) {
            return ("Queue Underflow")
        } else {
            return this.queueControl.pop(elm)
        }
    }
}
queue = new QueueDataStructure()