function QueueDataStructure() {

    this.queueControl = [];
    this.MAX_SIZE = 8;

    this.isEmpty = function () {
        if (this.queueControl.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    this.canEnqueue = function () {
        if (this.queueControl.length === this.MAX_SIZE) {
            return false;
        } else {
            return true;
        }
    }


    this.enqueue = function (element) {

        if (this.canEnqueue()) {
            this.queueControl.unshift(element);
            return this.queueControl;
          }
          else return "Queue Overflow";
    }

    this.dequeue = function (element) {
        
        if (this.queueControl.length === 0) {            
            return "Queue Underflow";            
        }
        return this.queueControl.pop(element);

    }



}
