function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 2;
}

QueueDataStructure.prototype.isEmpty = function(){
    if(this.queueControl.length === 0){
        return true;
    } return false;
}

QueueDataStructure.prototype.canEnqueue = function(){
    if(this.queueControl.length === this.MAX_SIZE){
        return false;
    } return true;
    
}

QueueDataStructure.prototype.enqueue = function(queue){
    if(this.queueControl.length === this.MAX_SIZE){
        return 'Queue Overflow';
    } else {
        this.queueControl.unshift(queue);
        return this.queueControl;
    }

}

QueueDataStructure.prototype.dequeue = function(queue){
    if(this.queueControl.length < this.MAX_SIZE){
        return 'Queue Underflow';
    } else{
        return this.queueControl.pop(queue);
    }

}