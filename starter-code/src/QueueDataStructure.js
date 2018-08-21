function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function() {
        if(this.queueControl.length) {
            return false;
        } else {
            return true;
        }
    };
    this.canEnqueue = function() {
        if(this.queueControl.length >= this.MAX_SIZE) {
            return false;
        } else {
            return true;
        }
    };

    this.enqueue = function(el) {
        if(this.canEnqueue()) {
            this.queueControl.unshift(el);
            return this.queueControl;
        } else {
            return "Queue Overflow";
        }
    };
  
    this.dequeue = function() {
        var first = '';
        if(this.isEmpty()) {
            return "Queue Underflow";
        } else {
            first = this.queueControl[this.queueControl.length - 1];
            this.queueControl.splice(-1);
            return first;
        }
    };
}
