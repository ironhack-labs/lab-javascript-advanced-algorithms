class QueueDataStructure {
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = 9;
        }

    isEmpty() {
        return this.queueControl.length === 0;
    }
    
    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE;
    }
    
    enqueue(elem) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(elem)
            return this.queueControl
                }
            return "Queue Overflow"; 
        }

    dequeue(elem) {
        if (this.isEmpty()) {
            return "Queue Underflow"
        }
        return this.queueControl.pop(elem)
    }

}
