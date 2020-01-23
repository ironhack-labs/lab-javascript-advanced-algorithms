class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10

    }
    
    isEmpty() {
        if(this.queueControl.length == 0) {
            return true

        } else {
            return false
        }

    }

    canEnqueue() {
        if(this.MAX_SIZE != this.queueControl.length) {
            return true

        } else {
            return false
        }

    }

    enqueue(parameter) {
        if (this.MAX_SIZE == this.queueControl.length) {
            return "Queue Overflow"
        } else {
            this.queueControl.unshift(parameter)
            return this.queueControl

        }

    }
    
    dequeue() {
        if (this.queueControl.length == 0) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop()
        }
    }
}
    