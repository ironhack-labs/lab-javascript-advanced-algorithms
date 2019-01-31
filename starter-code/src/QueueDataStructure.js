class QueueDataStructure {

    constructor() {
        this.MAX_SIZE = 10;
        this.queueControl = [];   
    }

    isEmpty() {
        return !this.queueControl.length
    }

    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE
    }

    enqueue(item) {
        
        if (this.canEnqueue()) {
            this.queueControl.unshift(item)
            return this.queueControl;
        }

        return 'Queue Overflow';
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue Underflow'
        }
        return this.queueControl.pop()
    }
}