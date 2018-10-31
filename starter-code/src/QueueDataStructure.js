function QueueDataStructure() {
    this.MAX_SIZE = 4
    this.queueControl = []
    this.isEmpty = function () {
        if (this.queueControl.length > 0) {return false};
        return true;
    }
    this.canEnqueue = function () {
        if (this.queueControl.length >= this.MAX_SIZE) {return false};
        return true;
     }
    this.enqueue = function (value) {
        if (this.queueControl.length >= this.MAX_SIZE) {return "Queue Overflow"};
        this.queueControl.unshift(value);
        return this.queueControl;
    }
    this.dequeue = function () {
        if (this.queueControl.length === 0) {return "Queue Underflow"};
        return this.queueControl.pop()
    }

    this.printQueue = function(){
        for (i=0; i<this.MAX_SIZE; i++){
            if(this.queueControl[i]!==undefined){
               $('.queue-element').eq(this.MAX_SIZE-1-i).text(this.queueControl[i])
            } else {
               $('.queue-element').eq(this.MAX_SIZE-1-i).text(`empty`)
            }
            
        }
    }
}

