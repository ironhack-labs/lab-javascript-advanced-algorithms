class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        return this.queueControl.length === 0
    }

    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }

    // Esto también podría ser más corto: return this.queueControl.length < this.MAX_SIZE

    enqueue(elm) {
        if (this.canEnqueue()) {
        this.queueControl.unshift(elm)
        return this.queueControl
        } else {
            return 'Queue Overflow'
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue Underflow'
        } else {    
        return this.queueControl.pop()
        }
    }


}
