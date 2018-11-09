class QueueDataStructure{
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }
    
    isEmpty(){
        if(this.queueControl.length === 0){
            return true;
        }else{
            return false;
        }

    }
    canEnqueue(){
        if(this.queueControl.length<this.MAX_SIZE){
            return true;
        }else{
            return false;
        }
    }

    enqueue(element){
        if(this.canEnqueue()){
            this.queueControl.unshift(element);
            
        }else{
            return "Queue Overflow"
        }
        return this.queueControl;
    }
    
    dequeue(){
        if(this.isEmpty()){
            return "Queue Underflow"
        }
            return this.queueControl.pop();
    }
}

// function QueueDataStructure () {
// }
