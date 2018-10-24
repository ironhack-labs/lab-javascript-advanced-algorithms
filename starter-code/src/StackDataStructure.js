// function StackDataStructure (capacity) {
//   this.stack = [];
//   this.capacity = capacity;
// }

// StackDataStructure.prototype.checkCapacity = () => {
//   if(this.stack.length >= this.capacity){
//     return "Stack Overflow"
//   } else if(this.stack.length === 0){
//     return "Stack Underflow"
//   }
// }

// StackDataStructure.prototype.addElement = (element) => {
//   this.stack.length === this.capacity ? "Stack Overflow" : this.capacity.push(element);
// }

// StackDataStructure.prototype.removeElement = () => {
//   return this.stack.length === 0 ? "Stack Underflow" : this.stack.pop();
// }