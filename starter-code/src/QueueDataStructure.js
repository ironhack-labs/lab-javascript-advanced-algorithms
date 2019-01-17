class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }
    isEmpty() {
        return this.queueControl.length === 0;
    }
    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE;
    }
    enqueue(el) {
        if (this.canEnqueue() === true) {
            this.queueControl.unshift(el);
            return this.queueControl            
        }
        else { return 'Queue Overflow' } 
    }   
    dequeue() {
        if (this.isEmpty() === false) {
            return this.queueControl.shift();    
        }
        else { return 'Queue Underflow' }    
    } 
}
