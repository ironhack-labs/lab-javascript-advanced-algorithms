//function QueueDataStructure () {
//}

class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 10
    }
    isEmpty() {
        if (this.queueControl.length == 0) {
            return true
        } 
        else {
            return false
        }
    }
    canEnqueue() {
        if (this.queueControl.length == this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }
    enqueue(elm) { //poner en la cola
        if (!this.canEnqueue()) {
            return 'Queue Overflow'
        }
        this.queueControl.unshift(elm)
        return this.queueControl
    }
    dequeue() { //sacar de la cola
        if (this.queueControl.length == 0) {
            return 'Queue Underflow'
        }
        return this.queueControl.pop()
    }
}

const objQueue = new QueueDataStructure();