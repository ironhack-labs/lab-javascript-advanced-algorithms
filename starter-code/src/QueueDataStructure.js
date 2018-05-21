function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  //Remember that Queue is a FIFO (First-in First-out) structure
}

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

QueueDataStructure.prototype.enqueue = function(bloque) {
    if (this.canEnqueue()){
        // this.queue.reverse(this.queue.push(bloque));
        this.queueControl.unshift(bloque);
    } else{
        return "Queue Overflow";
    } 
    return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function() {
    var primerBloque;
    if (this.isEmpty()) {
        return "Queue Underflow"
       
    } else {
      primerBloque =  this.queueControl.pop();
    }
    return primerBloque;;
};
