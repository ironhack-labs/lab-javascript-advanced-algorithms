function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 5;
}
QueueDataStructure.prototype.isEmpty = function (){
    if( this.queueControl.length === 0) {
        return true;
    }else{
        return false;
    }
}

QueueDataStructure.prototype.canEnqueue = function(){

    if (this.queueControl.length === this.MAX_SIZE){
        return false;
    }else{
        return true;
    }
    
}

QueueDataStructure.prototype.enqueue = function(enqueItem){

    if(!this.canEnqueue()){
        return "Queue Overflow";
    }else{
        this.queueControl.unshift(enqueItem);
        return this.queueControl;
    }

}
QueueDataStructure.prototype.dequeue = function(){
    if(this.queueControl.length === 0){
        return "Queue Underflow";
    }else{
        return this.queueControl[[this.queueControl.length-1]];
    }
    
}

qeue = new QueueDataStructure();