function QueueDataStructure (capacity) {
  this.stack = [];
  this.capacity = capacity;

}

QueueDataStructure.prototype.checkCapacity = () => {
  if(this.stack.length >= this.capacity){
    return "Stack Overflow"
  } else if(this.stack.length === 0){
    return "Stack Underflow"
  }
}

QueueDataStructure.prototype.addElement = (element) => {
  console.log(this.stack)
  // return this.stack.length === this.capacity ? "Stack Overflow" : this.stack.unshift(element);
  if(this.stack.length >= this.capacity){
    return "Stack"
  } 
    this.stack.unshift(element);
}

QueueDataStructure.prototype.removeElement = () => {
  // return this.stack.length === 0 ? "Stack Underflow" : this.stack.pop();
  return this.stack.pop();
}