class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    return !this.stackControl.length  ? true : false;
  }
  
  push(item) {
    // Check if can push is true
    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW')
    }

    // Push item onto the stack
    this.stackControl.push(item)
    return this.stackControl
  }

  pop() {
    // Check if we can remove item from stack
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW')
    }

    // Push item onto the stack
    return this.stackControl.pop()

  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;


