function QueueDataStructure () {

    this.queueControl=[];
    this.MAX_SIZE=8;
}

QueueDataStructure.prototype.isEmpty=function(){

    return (this.queueControl.length==0)
}

QueueDataStructure.prototype.canEnqueue=function(){

    return (this.queueControl.length<this.MAX_SIZE)

}

QueueDataStructure.prototype.enqueue=function(element){

        if (this.canEnqueue()){

            this.queueControl.unshift(element);
            return this.queueControl;
        }
        else return "Queue Overflow";
}

QueueDataStructure.prototype.dequeue=function(){

   var aux=this.queueControl[this.queueControl.length-1];
    if (!this.isEmpty()){

        this.queueControl.pop();
        return aux;
    }
    else return "Queue Underflow";
}