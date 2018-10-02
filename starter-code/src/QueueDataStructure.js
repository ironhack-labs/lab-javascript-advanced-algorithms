function QueueDataStructure () {
    this.queueSize = [];
    this.maximumSize = 9;
}

QueueDataStructure.prototype.isEmpty = function() {
    if(this.queueSize.length === 0) {
        return true;
    }else {
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue = function() {
    if((this.isEmpty()) || this.queueSize.length < this.maximumSize) {
        return true;
    }else {
        return false;
    }
}
QueueDataStructure.prototype.enqueue = function(e) {
    if(this.canEnqueue()) {
        this.queueSize.unshift(e);
        return this.queueSize;
    }else {
        return "Queue Overflow";
    }

}
QueueDataStructure.prototype.dequeue = function(e) {
    if(this.isEmpty()) {
        return "Queue Underflow";
    } else {
        this.queueSize.pop();
    }

}