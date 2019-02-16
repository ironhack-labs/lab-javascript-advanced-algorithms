function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 0;
    this.newElement = 0;
}

QueueDataStructure.prototype.isEmpty = function () {
    if (this.queueControl.length == 0) {
        console.log("Stack Underflow")
        return true;
        }
    else {
        console.log("You still have items")
        return false;
    }
}
       
QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length == this.MAX_SIZE) {
   console.log("Stack Overflow");
   return false
    } else {
    console.log("You can still add something")
    return true
    }
}
    

QueueDataStructure.prototype.enqueue = function () {
    if (this.canEnqueue = true) {
        this.queueControl.unshift(this.newElement);
    }
}

QueueDataStructure.prototype.dequeue = function () {
    if (this.queueControl.length > 0) {
        this.queueControl.pop();
    }    
}

