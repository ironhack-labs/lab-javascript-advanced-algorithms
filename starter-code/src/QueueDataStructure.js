  function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = parseInt();


    QueueDataStructure.prototype.isEmpty = function() {
      if (this.queueControl.length === 0) {
        return true;
      } else {
        return false;
      }
    };

    QueueDataStructure.prototype.canEnqueue = function() {
      if (this.queueControl.length === this.MAX_SIZE) {

        return false;
      } else {
        return true;
      }
    };

    QueueDataStructure.prototype.enqueue = function(a) {
      if (this.canEnqueue()) {
        this.queueControl.unshift(a);
        return this.queueControl;
      } else {
        return "Queue Overflow";
      }

    };

    QueueDataStructure.prototype.dequeue = function() {
      if (this.isEmpty()) {
        return 'Queue Underflow';
      } else {

        return this.queueControl.pop();
      }

    };
  }
