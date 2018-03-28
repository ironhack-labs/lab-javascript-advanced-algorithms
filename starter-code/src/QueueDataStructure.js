function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
    if (this.queueControl.length == 0){
        return true;
    }
    return false;
}

QueueDataStructure.prototype.canEnqueue = function () {
    if (this.canEnqueue.length < this.MAX_SIZE) {
        return true;
    }
    return false;
}

QueueDataStructure.prototype.enqueue = function (elem) {
    if (this.canEnqueue() == true) {
        this.queueControl.unshift(elem);
        return this.queueControl;
    } else {
        return "Queue Overflow";
    }
}

QueueDataStructure.prototype.dequeue = function (elem) {
    if (this.isEmpty() == true) {
        return 'Queue Underflow';
    } else {
        return this.queueControl.pop(elem);
    }   




}