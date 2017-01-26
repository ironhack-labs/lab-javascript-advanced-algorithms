function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = function () {
        return this.queueControl.length === 0;
    };
     this.canEnqueue = function (i) {
         this.queueControl.lenght === this.MAX_SIZE ? false : true;
     };
     this.enqueue = function (i) {
        if (this.queueControl.length === this.MAX_SIZE) {
            return ("Queue Overflow");
        } else {
           this.queueControl.unshift(i);
         return this.queueControl; 
        };
     };
     this.dequeue = function (i) {
         if (this.queueControl.length === 0) {
            return ("Queue Underflow");
        } else {
            return this.queueControl.push(i);
       };
 };
}
