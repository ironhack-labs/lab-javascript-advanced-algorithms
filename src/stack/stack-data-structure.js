class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else if (this.stackControl.length === this.MAX_SIZE) {
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
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error("STACK_OVERFLOW");
    }
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      throw new Error("STACK_UNDERFLOW");
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
