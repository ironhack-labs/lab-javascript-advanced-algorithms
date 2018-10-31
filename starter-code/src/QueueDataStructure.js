function QueueDataStructure () {
    this.queueControl=[];
    this.MAX_SIZE=10;
}

QueueDataStructure.prototype.isEmpty = function() {
    if (this.queueControl.length===0) {
        return true;
    } else {
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue = function() {
    if (this.queueControl.length<this.MAX_SIZE){
        return true;
    } else {
        return false;
    }
}   

QueueDataStructure.prototype.enqueue = function(elem) {
    if (this.canEnqueue()){
        this.queueControl.unshift(elem);
        return this.queueControl;
    } else {
        return "Queue Overflow";
    }
}

QueueDataStructure.prototype.dequeue = function() {
    if (this.isEmpty()){
        return "Queue Underflow";
    } else {
         this.queueControl.shift()
         return parseInt(this.queueControl);
    }
}
