function QueueDataStructure () {
    this.queueControl = [];
    this.max_size = 10;

}

QueueDataStructure.prototype.isEmpty = function(){
    return this.queueControl.length === 0 ? true : false;
}

QueueDataStructure.prototype.canEnqueue = function(){
    return this.queueControl.length === this.max_size ? false : true;
}

QueueDataStructure.prototype.enqueue = function(item){
    if(this.canEnqueue()){
        this.queueControl.unshift(item);
    }else{
        return  'Queue Overflow';
    }
    return this.queueControl;
}

QueueDataStructure.prototype.dequeue = function(){
    var firstItem;
    if(this.isEmpty()){
        return  'Queue Underflow';
    }else{
        lastItem = this.queueControl.pop();
    }
    return lastItem;
}

