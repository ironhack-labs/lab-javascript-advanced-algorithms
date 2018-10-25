function QueueDataStructure(capacity) {
  this.stack = [];
  this.capacity = capacity;
}

QueueDataStructure.prototype.checkCapacity = function () {
  if (this.stack.length >= this.capacity) {
    return 'Stack Overflow';
  } if (this.stack.length === 0) {
    return 'Stack Underflow';
  }
};

QueueDataStructure.prototype.addElement = function (element) {
  console.log(this.stack);
  // return this.stack.length === this.capacity ? "Stack Overflow" : this.stack.unshift(element);
  if (this.stack.length >= this.capacity) {
    return 'Stack';
  }
  this.stack.unshift(element);
};

QueueDataStructure.prototype.removeElement = function () {
  // return this.stack.length === 0 ? "Stack Underflow" : this.stack.pop();
  return this.stack.pop();
};
