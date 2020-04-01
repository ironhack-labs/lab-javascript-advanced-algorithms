class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    //TODO: copiarme todo lo del stack-dom cambiandolo por queue :D 
    display() {
        // ... your code goes here
        return this.queueControl
    }

    canEnqueue() {
        // ... your code goes here

        return this.queueControl.length < this.MAX_SIZE ? true : false

    }

    isEmpty() {
        // ... your code goes here
        return this.queueControl.length === 0
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
        return this.isEmpty() ? 'Queue Underflow' : this.queueControl.pop()
    }
}