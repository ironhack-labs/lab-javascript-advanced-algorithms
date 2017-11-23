function QueueDataStructure () {

    this.queueControl = [];
    this.MAX_SIZE = 20;

}

QueueDataStructure.prototype.isEmpty = function(){
    return (this.queueControl.length > 0) ? false : true;
}

QueueDataStructure.prototype.canEnqueue = function(){
    if(this.queueControl.length < this.MAX_SIZE)
    {   
        return true;
    }
    else return false;
}

QueueDataStructure.prototype.enqueue = function(newEle){
    if ( this.canEnqueue() ){
        this.queueControl.unshift(newEle);
        return this.queueControl;

    } else return "Queue Overflow";

}

QueueDataStructure.prototype.dequeue = function(){

    if ( !this.isEmpty() ){
        element = this.queueControl[this.queueControl.length-1];
        this.queueControl.splice(-1,1);
        return element;

    } else return "Queue Underflow";
}