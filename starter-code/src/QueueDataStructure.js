class QueueDataStructure {

    constructor() {
        this.queueControl = [],
            this.MAX_SIZE = 10
    }

    isEmpty() {
        if (this.queueControl.length > 0) {
            return false
        } else {
            return true
        }
    }
    canEnqueue() {
        if (this.queueControl.length === this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }
    enqueue(elm) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(elm)
            return this.queueControl
        } else {
            return `Queue Overflow`
        }
    }
    dequeue(elm) {
        if (this.isEmpty()) {
            return `Queue Underflow`
        } else {
            return this.queueControl.pop()
            
        }
    }

}