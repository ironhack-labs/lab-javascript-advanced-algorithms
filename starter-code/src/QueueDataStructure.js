class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 8
    }
    isEmpty() {
        if (this.queueControl.length != 0)
            return false
        else
            return true
    }
    canEnqueue() {
        if (this.queueControl.length === this.MAX_SIZE)
            return false
        else
            return true
    }
    enqueue(elm) {
        this.queueControl.unshift(elm)
        if (this.queueControl.length > this.MAX_SIZE) {
            return "Queue Overflow"

        } else {

            return this.queueControl
        }
    }
    dequeue() {
        if (this.queueControl.length < 1)
            return 'Queue Underflow'
        else
            return this.queueControl.pop()
    }
}