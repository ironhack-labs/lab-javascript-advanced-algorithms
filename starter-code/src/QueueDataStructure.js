function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 9;
}
QueueDataStructure.prototype.isEmpty = function() {
    return this.queueControl.length == 0;
}
QueueDataStructure.prototype.canEnqueue = function() {
    if(this.QueueControl<this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
}  
QueueDataStructure.prototype.enqueue = function(a) {
    if (this.canEnqueue()) {
        this.queueControl.unshift(a); 
    return this.queueControl;
} else {
    return 'Queue Overflow'
}
}
QueueDataStructure.prototype.dequeue = function() {
    if (this.isEmpty()) {
        return 'Queue Underflow'
    }
    return this.queueControl.pop(a);
}
