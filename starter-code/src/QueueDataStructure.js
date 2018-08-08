function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 3;
    this.isEmpty =
        function() {
            if (this.queueControl.length === 0) {
                return true;
            } else {
                return false;
            }
        } || true;

    this.canEnqueue = function() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    };

    this.enqueue = function(element) {
        if (this.canEnqueue()) {
            this.queueControl.unshift(element);
            return this.queueControl;
        } else {
            return "Queue Overflow";
        }
    };

    this.dequeue = function(element) {
        if (this.queueControl.length > 0) {
            return this.queueControl.pop();
        } else {
            return "Queue Underflow";
        }
    };
}
