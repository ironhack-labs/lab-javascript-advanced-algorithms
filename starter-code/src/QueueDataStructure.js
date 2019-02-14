function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE=8
}

QueueDataStructure.prototype.isEmpty = function (){
    if (this.queueControl.length === 0){
        return true
    } else {
        return false
    }
}

QueueDataStructure.prototype.canPush = function (){
    if (this.queueControl.length < this.MAX_SIZE){
        return true
    } else {
        return false
    }
}

