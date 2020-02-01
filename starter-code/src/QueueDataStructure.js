class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 5;
    }
    isEmpty() {
        if(this.queueControl[0]===undefined) {
            console.log('This queque is empty.');
            return true;
        } else {
            console.log('This queue is not empty.');
            return false;
        }
    }
    canEnqueue(){
        if(this.queueControl.length === this.MAX_SIZE) {
            console.log('This queue is full.');
            return false;
        } else {
            console.log('We can enqueue.');
            return true;
        }
    }
    enqueue(element) {
        if(this.canEnqueue()) {
            this.queueControl.unshift(element);
            return this.queueControl;
        } else {
            return 'Queue Overflow';
        }
    }
    dequeue() {
        if(this.isEmpty()) {
            return 'Queue Underflow';
        } else {
            return this.queueControl.pop();
        }
    }
}
