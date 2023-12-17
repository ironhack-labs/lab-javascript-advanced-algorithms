class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    // ... your code goes here
    if (this.canPush() === false) {
      return ('Stack Overflow');
      //throw new Error("STACK_OVERFLOW");
    } else {
      this.stackControl.push(item);
      return this.stackControl;
    }
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty() === true) {
      return ('Stack Underflow');
      //throw new Error("STACK_UNDERFLOW");
    } else {
      let lastItem = this.stackControl.pop();
      return lastItem;
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
