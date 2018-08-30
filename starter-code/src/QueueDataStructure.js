class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 8; 
    }

    canEnqueue() {
        if(this.queueControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }

    isEmpty() {
        if(this.queueControl.length === 0){
            return true
        }  else {
            return false
        }
    }

    enqueue(i) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(i)
            return this.queueControl
        } else {
            return "Queue Overflow"
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue Underflow";
        } else {
            return this.queueControl.shift()
        }
    }
}
