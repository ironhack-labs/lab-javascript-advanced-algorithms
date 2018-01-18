function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function () {
    if (this.queueControl == 0) {
        return true;
    } else {
        return false;
    }
}
QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
}
QueueDataStructure.prototype.enqueue = function (numero) {
    if (this.canEnqueue()) {
        this.queueControl.unshift(numero)
        return this.queueControl;
    } else {
        return "Queue Overflow";
    }
}
QueueDataStructure.prototype.dequeue = function () {
    if(this.queueControl == 0){
        return 'Queue Underflow';
    }else{
        return this.queueControl.pop();
    }
    }