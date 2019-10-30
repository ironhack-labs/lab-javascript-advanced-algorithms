class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty() {
        return (this.queueControl.length === 0) ? true : false;
    }

    canEnqueue() {
        return (this.queueControl.length >= this.MAX_SIZE) ? false : true;
        
    }

    enqueue(element) {
        this.queueControl.unshift(element);
        return (!this.canEnqueue()) ? "Queue Overflow" : this.queueControl;
    }

    dequeue() {
        return this.isEmpty() ? "Queue Underflow" : this.queueControl.pop();
    }



}
