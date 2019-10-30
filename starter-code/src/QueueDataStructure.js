class QueueDataStructure{
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = 1;
    }
    isEmpty(){
        if(this.queueControl.length === 0) return true;
        return false;
    }
    canEnqueue(){
        if(this.queueControl.length === this.MAX_SIZE){
            return false;
        }return true;
    }
    enqueue(val){
        this.queueControl.unshift(val);

        if(this.queueControl.length > this.MAX_SIZE){
            return "Queue Overflow";
        }return this.queueControl;

    }
    dequeue(){
        if(this.queueControl.length  === 0){
            return "Queue Underflow";
        }return this.queueControl.pop();
    }
}

// function QueueDataStructure () {
// }
