class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        return this.queueControl.length === 0 ? true : false;
    }

    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE ? true : false;
    }

    enqueue(el) {
        if(this.queueControl[this.MAX_SIZE - 1]) {
            return "Queue Overflow";
        }

        this.queueControl.unshift(el);
        return this.queueControl;
    }

    dequeue() {
        if(this.queueControl.length === 0) {
            return 'Queue Underflow';
        }

        return this.queueControl.pop();
    }
}
