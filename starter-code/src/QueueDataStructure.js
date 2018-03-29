function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 30
}
QueueDataStructure.prototype.isEmpty = function(){
    if (this.queueControl.length === 0){
        return true
    }else{
        return false;
    }
}


QueueDataStructure.prototype.canEnqueue = function(stc){
    if (this.queueControl.length < this.MAX_SIZE){
        return true
    } else {
        return false
    }
}
QueueDataStructure.prototype.enqueue = function(stc){
    if(this.canEnqueue()){
    this.queueControl.unshift(stc)
    return this.queueControl
    }
    else if (!this.canEnqueue()){
        return 'Queue Overflow'
    }
   }

 QueueDataStructure.prototype.dequeue = function(stc){
    if(!this.isEmpty()){
        var a = this.queueControl.pop(stc)
        return a  
        }else{
            return 'Queue Underflow'
        }
}


