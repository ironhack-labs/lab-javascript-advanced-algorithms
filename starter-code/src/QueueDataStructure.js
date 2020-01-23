let QueueDataStructure = class {
    constructor(queueControl, MAX_SIZE) {
        this.queueControl = [];
        this.MAX_SIZE = 8;
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

    enqueue(a) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(a)
            return this.queueControl
        } else {
            return 'Queue Overflow'
        }
    }

    dequeue() {
        if (this.queueControl.length > 0) {
            return this.queueControl.pop()

        } else {
            return 'Queue Underflow'
        }
    }







}
