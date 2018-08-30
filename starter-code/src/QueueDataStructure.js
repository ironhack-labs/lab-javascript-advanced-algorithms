function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 13;
}

QueueDataStructure.prototype.isEmpty = function (){
return this.queueControl.length === 0;
};


QueueDataStructure.prototype.canEnqueue = function(){
return this.queueControl.length < this.MAX_SIZE;
};


QueueDataStructure.prototype.enqueue = function(e){
if (this.canEnqueue() === true){
    this.queueControl.unshift(e);
    return this.queueControl;
}  else {
    return "Queue Overflow";
}
}

QueueDataStructure.prototype.dequeue = function(){
    if(this.queueControl.length >0){
       return  this.queueControl.pop();
}  else {
    return "Queue Underflow";
}}



