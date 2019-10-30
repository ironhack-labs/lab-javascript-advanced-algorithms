
class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 9;
    }
    isEmpty() {
        if (this.queueControl == '') { return true }
        return false;
    }
    canEnqueue() {
        if (this.queueControl.length == this.MAX_SIZE) { return false }
        return true;
    }
    enqueue(argPushed) {
        if (this.queueControl.length == this.MAX_SIZE) {
            return "Queue Overflow";
        }
        else {
            this.queueControl.unshift(argPushed)
            return this.queueControl;
        }
    }
    dequeue(argPoped) {
        if (this.queueControl.length == 0) {
            return "Queue Underflow";
        } else {
            return this.queueControl.pop(argPoped);
        }
    }
}
