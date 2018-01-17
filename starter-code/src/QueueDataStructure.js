function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 9;
}
QueueDataStructure.prototype.actualSize = function () {
    return this.queueControl.length;
}
QueueDataStructure.prototype.isEmpty = function(queue){

    return this.queueControl.length == 0;
}
QueueDataStructure.prototype.canEnqueue = function (queue){
    return this.queueControl.length < this.MAX_SIZE
}
QueueDataStructure.prototype.enqueue = function(a){
    if (this.queueControl.length == this.MAX_SIZE){
        return "Queue Overflow"
    }
    this.queueControl.push(a);
    return this.queueControl.reverse();
     
}
QueueDataStructure.prototype.dequeue = function() {
        if (this.isEmpty()){
            return "Queue Underflow"
        }
        this.queueControl.reverse().pop();  
    return this.queueControl.reverse()[0];
};
