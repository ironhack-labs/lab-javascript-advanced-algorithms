


function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 5;
    //this.MIN_SIZE = 1;
}

QueueDataStructure.prototype.isEmpty = function() {
    return this.queueControl.length === 0;
}

QueueDataStructure.prototype.canEnqueue = function() {
    if(this.queueControl.length < this.MAX_SIZE) {
        return true;
    }
    return false;
}

QueueDataStructure.prototype.enqueue = function(pushToQueue) {
    if(this.canEnqueue() === true) {
        this.queueControl.unshift(pushToQueue); // unshift() adds one or more elements to the array at the beginning
        return this.queueControl;
    }
    else return 'Queue Overflow';
}

QueueDataStructure.prototype.dequeue = function() {
    if(this.queueControl.length === 0) {
        return'Queue Underflow';
    }
    if(this.queueControl.length > 0) {
        return this.queueControl.pop();
    }
    //return this.queueControl;
}

// first in last out
// pop
// if you take an element out with dequeue, return the first element in the queue


const queue = new QueueDataStructure();


console.log(queue.isEmpty());
console.log(queue.canEnqueue());
console.log(queue.enqueue('something'));
console.log(queue.dequeue());

