function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
   return(this.queueControl.length == 0)
}

QueueDataStructure.prototype.canEnqueue = function(){
    return (this.queueControl.length+1 <= this.MAX_SIZE)
}

QueueDataStructure.prototype.enqueue = function(value){
    if (this.canEnqueue()== true){
        this.queueControl.unshift(value);
        return this.queueControl;        
    } else  {
       return "Queue Overflow";
    }    

}

QueueDataStructure.prototype.dequeue = function(){
    if(this.isEmpty()==false){
        return this.queueControl.pop();
    } else {
        return "Queue Underflow";
    }
}