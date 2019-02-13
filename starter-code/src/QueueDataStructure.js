function QueueDataStructure () {

    this.queueControl =  []
    this.MAX_SIZE = 9
}

QueueDataStructure.prototype.isEmpty = function (){
    return this.queueControl.length === 0
}

QueueDataStructure.prototype.canEnqueue = function (){
    return this.queueControl.length < this.MAX_SIZE
}

QueueDataStructure.prototype.enqueue = function (elm){
    this.queueControl.unshift(elm)
    if (this.canEnqueue()){
        return this.queueControl
    }
        return "Queue Overflow"
}

QueueDataStructure.prototype.dequeue = function (){
    if (this.isEmpty()){
        return "Queue Underflow"
    }
        return this.queueControl.pop()
}