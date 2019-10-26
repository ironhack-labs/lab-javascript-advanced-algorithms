function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
}
QueueDataStructure.prototype.canEnqueue = function (){
    return this.queueControl.length !== this.MAX_SIZE ? true : false;
}
QueueDataStructure.prototype.isEmpty= function (){
     return this.queueControl.length === 0 ? true : false;
}
QueueDataStructure.prototype.enqueue= function (element){
    if(this.canEnqueue()){
        this.queueControl.unshift(element);
        return this.queueControl;
    } else {
        return "Queue Overflow";
    }
};
QueueDataStructure.prototype.dequeue= function (){
    if (!this.isEmpty()){
        var firstElementInserted = this.queueControl[this.queueControl.length-1];
        this.queueControl.pop();
        return firstElementInserted;
    } else {
        return "Queue Underflow";
    }
}