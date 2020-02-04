class QueueDataStructure{
    constructor(){
        this.MAX_SIZE = 19;
        this.queueControl = [];
    }

    isEmpty(){
        return this.queueControl.length === 0;
    }

    enqueue(e){
        if(this.canEnqueue()){
            this.queueControl.unshift(e)
            return this.queueControl;
        }else{
            return 'Queue Overflow'
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            return this.queueControl.pop()
        }else{
            return 'Queue Underflow'
        }
    }

    canEnqueue(){
        return this.queueControl.length < this.MAX_SIZE
    }
}
