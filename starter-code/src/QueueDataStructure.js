function QueueDataStructure (maxItems = 10) {
    var that = this;
    this.queueControl = [];
    this.MAX_SIZE = maxItems;
    this.isEmpty = function () {
        return that.queueControl.length === 0;
    };
    this.canEnqueue = function () {
        return that.queueControl.length < that.MAX_SIZE;
    };
    this.enqueue = function (element) {
        if (that.canEnqueue()) {
            that.queueControl.unshift(element);
            return that.queueControl;
        } else {
            return "Queue Overflow";
            }  
    };
    this.dequeue = function (element) {
        if (!that.isEmpty()) {
            return that.queueControl.pop(element);
        } else {
            return "Queue Underflow";
            }  
    };
}