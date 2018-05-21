function QueueDataStructure() {
  this.queue = [];
  this.maxqueue = 10;
  //Remember that Queue is a FIFO (First-in First-out) structure
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queue.length === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queue.length === this.canEnqueue) {
    return false;
  } else {
    return true;
  }
};

QueueDataStructure.prototype.enqueue = function(bloque) {
    if (this.canEnqueue()){
        // this.queue.reverse(this.queue.push(bloque));
        this.queue.push(bloque);
    } else{
        return "Queue Overflow";
    } 
    return this.queue;
};

QueueDataStructure.prototype.dequeue = function() {
    var primerBloque;
    if (this.isEmpty()) {
        return "Queue Underflow"
       
    } else {
      primerBloque =  this.queue.shift();
    }
    return primerBloque;;
};
