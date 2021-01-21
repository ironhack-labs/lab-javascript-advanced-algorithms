class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    display() {
        // ... your code goes here
    }

    canEnqueue() {
        return (this.queueControl.length < this.MAX_SIZE)

    }

    isEmpty() {
        return (this.queueControl.length === 0)

    }

    enqueue(item) {
        if (!this.canEnqueue()) {
            return 'Queue Overflow'
        }
        this.queueControl.unshift(item)
        return this.queueControl
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue Underflow'
        }
        return this.queueControl.pop()
    }
}