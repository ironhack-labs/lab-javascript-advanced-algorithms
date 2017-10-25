class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }
    isEmpty() {
        if (this.queueControl.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true;
        }
        else {
            return false;
        }
    }
    enqueue(element) {
        if (this.queueControl.length == this.MAX_SIZE) {
            return "Queue Overflow";
        }
        else {
            this.queueControl.unshift(element);
            return this.queueControl;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue Underflow';
        }
        else {
            return this.queueControl[this.queueControl.length-1];
        }
    }
}


