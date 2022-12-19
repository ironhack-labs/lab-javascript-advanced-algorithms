class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length === 10) {
      return false;
    } else if (this.stackControl.length <=9) {
      return true;
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length > 0) {
      return false;
    } else if (this.stackControl.length === 0) {
      return true;
    }
  }

  push(item) {
    // ... your code goes here
    let addItem = this.canPush();
    if ((addItem = true)) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error("STACK_OVERFLOW");
    }
  }

  pop() {
    // ... your code goes here
    let isEmpty = this.isEmpty();
    if (isEmpty = false) {
      this.stackControl.pop(item);
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
