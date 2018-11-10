class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10; 
    }
}

isEmpty() {
    if (this.queueControl.length > 0) {
        return false
    } else {
        return true
    }       
}

canEnqueue() {
}

enqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
        return false } else {
          this.stackControl.enqueue(element);
        }
    }
    


// dequeue function 
dequeue() { 
    if(this.queueControl.isEmpty()) 
    return this.queueControl.dequeue(); 
} 
