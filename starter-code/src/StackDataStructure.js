function StackDataStructure (capacity) {
  this.stack = [];
  this.capacity = capacity;
}

StackDataStructure.prototype.checkCapacity = function() {
  if(this.stack.length >= this.capacity){
    return "Stack Overflow"
  } else if(this.stack.length === 0){
    return "Stack Underflow"
  }
}

StackDataStructure.prototype.addElement = function(element) {
  this.stack.length >= this.capacity ? "Stack Overflow" : this.stack.push(element);
}

StackDataStructure.prototype.removeElement = function() {
  return this.stack.length === 0 ? "Stack Underflow" : this.stack.pop();
}