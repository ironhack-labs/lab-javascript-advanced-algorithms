class QueueDataStructure {
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = 5;
    }

    isEmpty() {
        if (this.queueControl.length === 0) {
            return true; 
        }
        else {return false;}
    }

    canEnqueue() {
        if(this.queueControl.length < this.MAX_SIZE) {
            return true;
        }
        else {return false;}
    }

    enqueue(element) {
        if(!this.canEnqueue()) {return "Queue Overflow";}
            this.queueControl.unshift(element);
        return this.queueControl;
    }

    dequeue() {
        if(this.isEmpty() === true) return "Queue Underflow";
        return this.queueControl.pop();
    }

}

