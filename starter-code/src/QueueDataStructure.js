class QueueDataStructure{
    constructor(queueControl,MAX_SIZE){
        this.queueControl = []
        this.MAX_SIZE = 8
    }

    isEmpty(){
        // this.stackControl.length==0 ? true : false
        if(this.queueControl.length==0){
            return true
        }else{
            return false
        }
    }

    canEnqueue(){
        if(this.queueControl.length < this.MAX_SIZE){
            return true
        }else{
            return false
        }
    }

    enqueue(elm){
        if(this.canEnqueue()){
            // this.stackControl[this.stackControl.length] = elm
            this.queueControl.unshift(elm)
            return this.queueControl
        }else{
            return 'Queue Overflow'
        }
    }

    dequeue(){
        if(this.queueControl.length > 0){
            return this.queueControl.pop()
        }else{
            return 'Queue Underflow'
        }
    }
}