function QueueDataStructure () {
  this.MAX_SIZE = 8;
  this.min = 0;
  this.counter = 0;
  this.queueControl = []; 
}

QueueDataStructure.prototype.enqueue = function(content) {
  if (this.counter == this.MAX_SIZE) {
    return "Queue Overflow";
  }
  if (this.counter < this.MAX_SIZE) {
    this.queueControl.unshift(content);
    this.counter +=1;
    return this.queueControl;
  }
}

QueueDataStructure.prototype.dequeue = function() {
  if (this.counter == this.min) {
    return "Queue Underflow"
  }
  this.counter -=1;
  return this.queueControl.pop();
  
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.counter == this.min) {
    return true;
  }
  else{
    return false;
  } 
}

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.counter == this.MAX_SIZE) {
    return false;
  }
  else {
    return true;
  }
}

var queue = new QueueDataStructure();
// queue.addElement("Coucou");

export default QueueDataStructure;