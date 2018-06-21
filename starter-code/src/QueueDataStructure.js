function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 15;
}
QueueDataStructure.prototype.isEmpty = function () {
    return this.queueControl.length === 0;

}
QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
}
QueueDataStructure.prototype.enqueue = function (a) {
    this.queueControl.unshift(a);
    if(!this.canEnqueue()){
        return "Queue Overflow";
    }else{
        return this.queueControl;
    }
}
QueueDataStructure.prototype.dequeue = function () {
    var pop = this.queueControl.pop();
    if (this.isEmpty()) {
        return "Queue Underflow";

    } else {
        return pop;
    }
}
