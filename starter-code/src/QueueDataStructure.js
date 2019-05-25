function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.items = 0;

}

QueueDataStructure.prototype.isEmpty = function () {
  if(this.items < 1){
    return true;
  }
  return false;
}

QueueDataStructure.prototype.canEnqueue = function () {
  if(this.items < this.MAX_SIZE){
    return true;
  }
  return false;
}


QueueDataStructure.prototype.enqueue = function (e) {
  this.queueControl.unshift(e)
  this.items = this.queueControl.length;

  if(this.items > this.MAX_SIZE){ return 'Queue Overflow' }
  
  return this.queueControl
}

QueueDataStructure.prototype.dequeue = function () {

  let willBeDequeued = this.queueControl[this.queueControl.length - 1];
  this.queueControl.pop()
  this.items = this.queueControl.length;

  if(this.items < 1){ return 'Queue Underflow' }

  return willBeDequeued;

}

let queue = new QueueDataStructure();

console.log(queue.isEmpty())