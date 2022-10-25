class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if(this.stackControl.length >= this.MAX_SIZE) {
      return false;
    }
    return true;
  }

  isEmpty() {
    // ... your code goes here
    return this.stackControl.length === 0;
  }

  push(item) {
    // ... your code goes here
    if(this.canPush()) {
      this.stackControl.push(item);
    } else if (!this.canPush()) {
      throw new Error("STACK_OVERFLOW");
    }
    return this.stackControl;
  }

  pop() {
    // ... your code goes here
    if(this.isEmpty()) {
      throw new Error("STACK_UNDERFLOW");
    }
    let toBeRemoved = this.stackControl[this.stackControl.length-1];
    this.stackControl.pop();
    return toBeRemoved;
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
