function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 20;
}

QueueDataStructure.prototype.isEmpty = function(){
    return this.queueControl == 0;
}

QueueDataStructure.prototype.canEnqueue = function(a){
    if (this.queueControl.length >= this.MAX_SIZE){
        return false;
    }
    else {
        this.queueControl.push(a)
        return true;
    }
}

QueueDataStructure.prototype.enqueue = function(a){
    if(this.queueControl.length >= this.MAX_SIZE ){
        return 'Queue Overflow';
    }else{
        this.queueControl.unshift(a);
        return this.queueControl;
    }
}

QueueDataStructure.prototype.dequeue = function(){
    if( this.queueControl.length <= 0){
        return "Queue Underflow"
    } else {
        return this.queueControl.pop()
    }
}
