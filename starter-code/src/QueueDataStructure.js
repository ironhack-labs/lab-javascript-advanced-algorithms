class QueueDataStructure {

    constructor(){
        this.queueControl = []
        this.MAX_SIZE = 10
    }

    isEmpty () {
        return this.queueControl.length == 0
    }

    canEnqueue () {
        if (this.queueControl.length == this.MAX_SIZE){
            return false
        }else {
            return true
        }
    }

    enqueue (puseable) {
        
        if (this.canEnqueue()){
            this.queueControl.unshift(puseable)
            return this.queueControl
        }else{
            return 'Queue Overflow'
        }

    }

    dequeue () {
        if (!this.isEmpty()){
            return this.queueControl.pop()
        }else {
            return "Queue Underflow"
        }
    }
}
