class QueueDataStructure {
    constructor(){
        this.queueControl = []
        this.MAX_SIZE = 10
    }

    isEmpty(){
        return this.queueControl.length ? false : true
    }
    canEnqueue(){
        return this.queueControl.length == this.MAX_SIZE ? false : true
    }
    enqueue(elm){
        if (this.canEnqueue()) {
            this.queueControl.unshift(elm)
            return this.queueControl
        } else return 'Queue Overflow'
    }
    dequeue(){
        return this.isEmpty() ? 'Queue Underflow' : this.queueControl.pop()
    }
}
