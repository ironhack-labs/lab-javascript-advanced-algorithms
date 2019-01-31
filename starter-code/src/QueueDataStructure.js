class QueueDataStructure{
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }
    isEmpty(){
        if(this.queueControl.length == 0){
            return true;
        }else{
            return false;
        }
    };

    canEnqueue(){
        if(this.queueControl.length >= 0 && this.queueControl.length < this.MAX_SIZE){
            return true;
        }else{
            return false;
        }
    };

    enqueue(element){
        let enqueueCondition = this.canEnqueue();
        if(enqueueCondition == true){
            this.queueControl.unshift(element);
            return this.queueControl;
        }else if(this.queueControl.length == this.MAX_SIZE){
            return 'Queue Overflow';
        }else{
            return this.queueControl;
        }
    };

    dequeue(){
        let dequeueCondition = this.isEmpty();
        if(dequeueCondition == true){
            return 'Queue Underflow'
        }else{
            return this.queueControl.pop();
        }
    };
}
