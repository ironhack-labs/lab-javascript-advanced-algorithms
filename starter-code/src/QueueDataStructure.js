function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function() {
    if (this.queueControl.length == 0) {
        return true;
    } else { return false }
}

QueueDataStructure.prototype.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) {
        return true;
    }
    return false;
    
}

QueueDataStructure.prototype.enqueue = function (el) {
    if (this.canEnqueue() == true) {
    this.queueControl.unshift(el);
    return this.queueControl;
    }
    return "Queue Overflow";
}

QueueDataStructure.prototype.dequeue = function (el) {
    if (this.isEmpty() == false) {
    return this.queueControl.pop(el);
    } 
    return 'Queue Underflow'
}
