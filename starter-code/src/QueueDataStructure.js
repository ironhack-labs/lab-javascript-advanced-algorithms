function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 9; //definir max size
  this.isEmpty = function() {
    if (this.queueControl.length == 0) return true;
    return false;
  };
  this.canEnqueue = function() {
    if (this.MAX_SIZE > 1) return true;
    return false;
  };
  this.enqueue = function(elem) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(elem);
      return [elem];
    } else {
      return "Queue Overflow";
    }
  };
  this.dequeue = function() {
    if (!this.isEmpty()) {
      let last = this.queueControl.pop();
      return last;
    } else {
      return "Queue Underflow";
    }
  };
}

//Para agregar al principio: .unshift
