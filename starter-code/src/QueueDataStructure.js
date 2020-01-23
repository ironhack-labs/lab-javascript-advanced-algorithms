class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 6
    }
    isEmpty() {
        if (this.queueControl.length === 0) {
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
        if (this.canEnqueue(elm)) {
            this.queueControl.unshift(elm);
            return this.queueControl;
        } else {
            return ('Queue Overflow')
        }
    }
    dequeue(elm) {
        if (this.isEmpty(elm)) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop(elm)
        }
    }
}