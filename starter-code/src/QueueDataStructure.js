function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 8
}
QueueDataStructure.prototype.isEmpty = function() {
    return (this.queueControl.length == 0) ? true : false
}
QueueDataStructure.prototype.canEnqueue = function() {
    return (this.queueControl.length == this.MAX_SIZE) ? false : true
}
QueueDataStructure.prototype.enqueue = function(arg) {
    if(!this.canEnqueue()) {
    return "Queue Overflow"
    }
    this.queueControl.unshift(arg)
    return this.queueControl
    }
QueueDataStructure.prototype.dequeue = function() {
    return (this.queueControl.length == 0) ? "Queue Underflow" : this.queueControl.pop()
}
