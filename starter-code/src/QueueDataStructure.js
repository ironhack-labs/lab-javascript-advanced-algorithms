class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10
    }
    isEmpty() {
        return this.queueControl == 0
    }
    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE
    }
    enqueue(elm) {
        if (this.queueControl.length == this.MAX_SIZE) {
            return "Queue Overflow"
        } else {
            this.queueControl.unshift(elm)
            return this.queueControl
        }
    }
    dequeue(elm) {
        if (this.queueControl.length == 0) {
            return "Queue Underflow"
        } else {
            return this.queueControl.pop(elm)
        }
    }
}
const queue = new QueueDataStructure()






