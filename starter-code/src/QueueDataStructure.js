// function QueueDataStructure () {
// }

class QueueDataStructure{
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty(){
        if(this.queueControl.length===0){
            return true;
        }
        else{
            return false;
        }
    }

    canEnqueue(){
        if(this.queueControl.length===this.MAX_SIZE){
            return false;
        }
        else{
            return true;
        }
    }

    enqueue(ele){
        if(this.canEnqueue()){
            this.queueControl.unshift(ele);
            return this.queueControl;
        }
        else{
            return "Queue Overflow";
        }
    }

    dequeue(ele){
        if(!this.isEmpty()){
            return this.queueControl.pop(ele);
        }
        else{
            return "Queue Underflow";
        }
    }
}