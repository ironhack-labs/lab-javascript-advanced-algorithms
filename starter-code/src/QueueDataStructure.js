function QueueDataStructure (max) {

    this.queueControl = [];
    this.MAX_SIZE = max;

}

QueueDataStructure.prototype.isEmpty = function(){
    return this.queueControl.length == 0;
}


QueueDataStructure.prototype.canEnqueue = function(){
    return this.queueControl.length < this.MAX_SIZE;
    
}

QueueDataStructure.prototype.enqueue = function(arr){
    if (!this.canEnqueue()) return "Queue Overflow";
    this.queueControl.unshift(arr);
    return this.queueControl;
}


QueueDataStructure.prototype.dequeue = function(arr){
    if (this.isEmpty()) return "Queue Underflow"
    this.queueControl.shift(arr);
    return this.queueControl[0]
}