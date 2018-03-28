function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 2;
}
QueueDataStructure.prototype.isEmpty = function(){
    return (this.queueControl.length === 0);
}
QueueDataStructure.prototype.canEnqueue = function(){
    return (this.queueControl.length < this.MAX_SIZE);
}
QueueDataStructure.prototype.enqueue = function(i){
    if (this.queueControl.length < this.MAX_SIZE){
        this.queueControl.unshift(i);
        return this.queueControl;
    }else {
        return "Queue Overflow";
    }
}
QueueDataStructure.prototype.dequeue = function(){
    if (this.queueControl.length === 0){
        return 'Queue Underflow';
    } else {
        return this.queueControl.pop();
    }
}