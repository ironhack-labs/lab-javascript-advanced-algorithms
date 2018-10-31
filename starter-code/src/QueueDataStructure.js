function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function(){
 return (this.queueControl.length === 0) ? true : false
}
QueueDataStructure.prototype.canEnqueue = function(){
 return (this.queueControl.length < this.MAX_SIZE) ? true : false 
}
QueueDataStructure.prototype.enqueue = function(textAsk){
    if (this.canEnqueue()){
        this.queueControl.unshift(textAsk);
        return this.queueControl
    } else return 'Queue Overflow'
}
QueueDataStructure.prototype.dequeue = function(){
    if (this.isEmpty()) {return 'Queue Underflow'}
    else {
        return this.queueControl.pop();
    
    }

}
