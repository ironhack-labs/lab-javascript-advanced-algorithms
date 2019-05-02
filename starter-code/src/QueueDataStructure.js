class QueueDataStructure {
    
    constructor(){
        this.queueControl= [],
        this.MAX_SIZE = 8
    }

    isEmpty(){
        if(this.queueControl.length == 0){
            return true
        } else {
            return false
        }
    }
    canEnqueue(){
        if(this.queueControl.length < this.MAX_SIZE){
            return true
        } else{
            return false
        }
    }
    enqueue(elem){
        if(this.canEnqueue()){
            this.queueControl.unshift(elem)
            return this.queueControl
            }else {
                return 'Queue Overflow'
            }
    }
    dequeue(){
        if(this.isEmpty()){
            return 'Queue Underflow'
        }else{
            let algo = this.queueControl[this.queueControl.length-1]
            this.queueControl.pop()
            return algo
        }

    }

}
