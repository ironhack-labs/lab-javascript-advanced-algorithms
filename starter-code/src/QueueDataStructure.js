function QueueDataStructure () {
    this.queueControl = new Array();
    this.MAX_SIZE = 10;
    this.isEmpty = function(){
        return (this.queueControl.length == 0) ? true : false;
    }
    this.canEnqueue = function(){
        return (this.queueControl.length < this.MAX_SIZE) ? true : false;
    }
    this.enqueue = function(element){
        return (this.queueControl.length < this.MAX_SIZE) ?
        (this.queueControl.splice(0,0,element), this.queueControl) : "Queue Overflow";
    }
    this.dequeue = function(){
        return (this.queueControl.length) ? 
        (this.queueControl[this.queueControl.length-1], this.queueControl.pop()) : 'Queue Underflow';
    }
}