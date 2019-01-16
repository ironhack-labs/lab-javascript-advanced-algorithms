function QueueDataStructure () {
    this.queueControl=[];
    this.MAX_SIZE=7;
}

QueueDataStructure.prototype.isEmpty = function(){           return this.queueControl.length>0?false:true
}    

QueueDataStructure.prototype.canPush =function(){
    return  this.isEmpty() || this.queueControl.length<this.MAX_SIZE}

QueueDataStructure.prototype.push = function(item) {
    if (this.canPush()){
        this.queueControl.push(item);
        return this.queueControl
    }
        return 'Stack Overflow'
}   
QueueDataStructure.prototype.pop =function(){
    if (!this.isEmpty()){
        this.queueControl.pop();
    } else { 'Stack Underflow'}
}
