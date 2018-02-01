function QueueDataStructure () {
        this.queueControl=[];
        this.MAX_SIZE=10; 
}
QueueDataStructure.prototype.isEmpty=function(){
    if(this.queueControl.length===0)
    {
    return true;}
    else{ 
        return false;
    }
};
QueueDataStructure.prototype.canEnqueue=function(){
    if(this.queueControl.length===this.MAX_SIZE){
        return false;
    }
    return true;
};
QueueDataStructure.prototype.enqueue=function(a){
    if(this.queueControl.length===this.MAX_SIZE){
        return "Stack Overflow"
    }else{
        this.queueControl.push(a);
        return this.queueControl;
    }
}
QueueDataStructure.prototype.dequeue=function(){
    if(this.queueControl.length===0){
        return "Stack Underflow";
    }
    return this.queueControl[this.queueControl.length-1];
}