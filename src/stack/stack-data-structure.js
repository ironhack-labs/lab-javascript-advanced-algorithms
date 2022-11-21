class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    // ... your code goes here
    return this.stackControl.length == 0;
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) this.stackControl.push(item);
    else throw new Error('STACK_OVERFLOW');

    return true;
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) this.stackControl.pop();
    else throw new Error('STACK_UNDERFLOW');
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
