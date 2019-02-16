function QueueDataStructure () {

    this.MAX_SIZE = 20;
    this.queueControl = [];

    this.isEmpty = function() {
        return this.queueControl.length == 0;
    }
    this.canEnqueue = function() {
        return this.queueControl.length < this.MAX_SIZE;
    }
    this.enqueue = function(element) {
        if (!this.canEnqueue()) return 'Queue Overflow';
        this.queueControl.unshift(element);
        return this.queueControl;
    }
    this.dequeue = function() {
        if (this.isEmpty()) return 'Queue Underflow';
        return this.queueControl.pop();
    }
}
