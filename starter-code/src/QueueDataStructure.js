
class QueueDataStructure {
    constructor() {
        this.queueControl = []; //properties
        this.MAX_SIZE = 10;
    }
    //actions

    isEmpty() {
        if (this.queueControl.length === 0) {
            return true
        } else {
            return false;
        }
    }

    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    }

    enqueue(element) {
        this.queueControl.unshift(element);

        if (this.queueControl.length > this.MAX_SIZE) {
            return 'Queue Overflow'
        }
        return this.queueControl;
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop();
        }
    } 

}