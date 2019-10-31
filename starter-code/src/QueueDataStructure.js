class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 8
    }

    isEmpty() {
        if (this.queueControl.length <= 0) {
            return true;
        } else {
            return false;
        }
    }

    canEnqueue() {
        if (this.queueControl.length >= this.MAX_SIZE) {
            return false;
        }
        return true;
    }

    enqueue(el) {
        if (this.queueControl.length >= this.MAX_SIZE) {
            return "Queue Overflow";
        } else {
            this.queueControl.unshift(el);
            return this.queueControl;

        }
    }

    dequeue() {
        if (this.queueControl.length <= 0) {
            return 'Queue Underflow';
        } else {
            return this.queueControl.pop();
        }
    }
}
