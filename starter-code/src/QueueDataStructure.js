function QueueDataStructure(capacity) {
  this.stack = [];
  this.capacity = capacity;
}

QueueDataStructure.prototype.checkCapacity = function () {
  if(this.stack.length >= this.capacity){
    return true
  } else if(this.stack.length <= 0){
    return false
  }
  return false
};

QueueDataStructure.prototype.addElement = function (element) {
  this.checkCapacity() ? "Stack Overflow" : this.stack.unshift(element);
};

QueueDataStructure.prototype.removeElement = function () {
  this.checkCapacity() ? "Stack Underflow" : this.stack.pop();
};
