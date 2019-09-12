class QueueDataStructure {
    constructor () {
        this.queueControl = [];
        this.MAX_SIZE = 10;
        this.size = 0;
    }

    isEmpty (){
        return (this.size === 0);
    }

    canEnqueue () {
        return (this.size < this.MAX_SIZE);
    }

    enqueue (item) {
        if(this.canEnqueue ()){
            this.size += 1; 
            this.queueControl.unshift(item);
            return this.queueControl;
        } else {
            return 'Queue Overflow';
        }
    }

    dequeue () {
        if (!this.isEmpty()) {
            this.size -= 1;
            return this.queueControl.pop();
        } else { 
            return 'Queue Underflow';
        }
    }
}
