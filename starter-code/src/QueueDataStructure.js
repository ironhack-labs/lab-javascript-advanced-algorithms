class QueueDataStructure {
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = Infinity;
    }
    isEmpty(){
        if(this.queueControl.length > 0) return false;
        return true;
    }
    canEnqueue(){
        if(this.queueControl.length === this.MAX_SIZE){
            return false;
        } else
        return true;
    }
    enqueue(element){
        if(this.queueControl.length === this.MAX_SIZE){
            return "Queue Overflow";
        } else {
            this.queueControl.unshift(element);
            return this.queueControl;
        }
    }
    dequeue(){
        if(this.queueControl.length === 0) return "Queue Underflow"
        return this.queueControl[this.queueControl.length-1]
    }
}
