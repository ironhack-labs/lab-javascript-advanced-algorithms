class QueueDataStructure {
    constructor(){
        this.queueControl=[]
        this.MAX_SIZE = 5
    }

    isEmpty(){
        return (this.queueControl.length===0)
    }
    canEnqueue(){
        return (this.queueControl.length<this.MAX_SIZE)
    }
    enqueue(elem){
        if (this.canEnqueue()){
            this.queueControl.unshift(elem)
            return this.queueControl
        }
        else{
             return "Queue Overflow"
        }
        
    }
    dequeue(){
         if (this.isEmpty()){
             return "Queue Underflow"
         }
         else {
             return this.queueControl.pop()
         }
    }
}
