function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = () => {
        return this.queueControl-length === 0;
    };
    this.canEnqueue = () => {
        return this.queueControl.length < this.MAX_SIZE;
    };
    this.enqueue = elem => {
        if (this.canEnqueue ()) {
            this.queueControl.unshif(elem);
            return this.queueControl;
        }
        return "Queue Overflow"
    };
    this.dequeue = () => {
        if (!this.isEmpty()) {
            return this.queueControl.pop();
        }
        return "Queue underflow";
    };
}
