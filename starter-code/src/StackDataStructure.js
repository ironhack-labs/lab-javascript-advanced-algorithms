// Initialize variable as an object
let stack = {};

// Define Stack Class
class Stack {
  constructor() {
    this.stackControl = []; // Contains elements of stack object
    this.MAX_SIZE = 16; // Maximum number of elements allowed in stack object
  }

  // Return true if number of elements is 0
  isEmpty() {
    if (this.stackControl.length > 0) return false;
    return true;
  }

  // Return true if there is space to add elements, according to max size
  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) return false;
    return true;
  }

  // Add element to end of stack
  push(stackElement) {
    // Verify if max size not reached
    if (this.canPush() === true) {
      this.stackControl.push(stackElement);
      return this.stackControl;
    }
    return "Stack Overflow"; // When max size is reached
  }

  // Return last element of stack
  pop() {
    if (!this.isEmpty()) return this.stackControl.pop();
    return "Stack Underflow";
  }
}

function StackDataStructure() {
  stack = new Stack();
  return stack;
}

StackDataStructure();
console.log(stack);
