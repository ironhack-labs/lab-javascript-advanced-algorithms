class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    display() {
        // ... your code goes here
        return this.queueControl
    }

    canEnqueue() {
        // ... your code goes here
        if (this.queueControl.length === this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }

    isEmpty() {
        // ... your code goes here
        if (this.queueControl.length > 0) {
            return false
        } else {
            return true
        }
    }

    enqueue(item) {
        // ... your code goes here
        if (this.canEnqueue()) {
            this.queueControl.unshift(item)
            return this.queueControl
        } else {
            return 'Queue Overflow'
        }
    }

    dequeue() {
        // ... your code goes here
        if (this.queueControl.length === 0) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop()
        }
    }
}