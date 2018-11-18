//Aguas: en Queue el inicio de la cola está en el ÚLTIMO elemento de queueControl
function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function () {
    return (this.queueControl.length === 0) ? true : false;
  }
  this.canEnqueue = function () {
    return (this.queueControl.length < this.MAX_SIZE) ? true : false;
  }
  this.enqueue = function (arg) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(arg);
      return this.queueControl;
    }
    else return "Queue Overflow";
  }
  this.dequeue = function() {
    return (this.queueControl.length === 0) ? "Queue Underflow":
    this.queueControl.pop();
  }
}
