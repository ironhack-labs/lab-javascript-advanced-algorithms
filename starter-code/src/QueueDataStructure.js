class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        return this.queueControl.length === 0 ? true : false
        // if (this.queueControl.length === 0) {
        //     return true
        // } else
        //     return false
    }


    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true
        } else
            return false
    }


    enqueue(elm) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(elm)
            return this.queueControl
        } else if (this.queueControl.length === this.MAX_SIZE) {
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