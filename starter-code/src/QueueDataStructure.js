function QueueDataStructure () {
    this.queueControl=[];
    this.MAX_SIZE=8;
}

QueueDataStructure.prototype.isEmpty=function(){
    return this.queueControl.length===0;
}
QueueDataStructure.prototype.canEnqueue=function(){
    return this.queueControl<this.MAX_SIZE;
}
QueueDataStructure.prototype.enqueue=function(e){
    if(this.canEnqueue()){
        this.queueControl.unshift(e);
        return this.queueControl;
    }
    else{
        return "Queue Overflow";
    }
}

QueueDataStructure.prototype.dequeue=function(){
    if(this.isEmpty()===false){
        return this.queueControl.pop();
    }
    else{
        return "Queue Underflow";
    }
}



