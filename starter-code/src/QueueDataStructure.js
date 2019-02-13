function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE = 8
}
    
QueueDataStructure.prototype.isEmpty = function(){
    if(this.queueControl.length === 0){
        return true
    }
    else{
        return false
    }
}

QueueDataStructure.prototype.canEnqueue = function(){
    if(this.queueControl.length < this.MAX_SIZE){
        return true
    }
    else{
        return false
    }
}

QueueDataStructure.prototype.enqueue = function(elm){
    if(this.canEnqueue()===true){
        this.queueControl.unshift(elm)
        return this.queueControl
    }
    else{
        return "Queue Overflow"
    }
}

QueueDataStructure.prototype.dequeue = function(){
    if(this.isEmpty()===true){
        return "Queue Underflow"
    }
    else{
        return this.queueControl.pop()
    }
}
