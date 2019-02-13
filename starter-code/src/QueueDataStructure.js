function QueueDataStructure () {
    this.stackControl = []
    this.MAX_SIZE = 8
}

/*queueControl property has been renamed after passing tests 
to allow code reuse between stack and queue*/

QueueDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length===0
}

QueueDataStructure.prototype.canEnqueue = function(){
    return this.stackControl.length!==this.MAX_SIZE
}

QueueDataStructure.prototype.enqueue = function(element){
    if(this.canEnqueue()){
        this.stackControl.unshift(element)
        return this.stackControl
    } else {return "Queue Overflow"}
}

QueueDataStructure.prototype.dequeue = function(){
    if(this.isEmpty()){
        return "Queue Underflow"
    } else {
        return this.stackControl.pop()
    }
}