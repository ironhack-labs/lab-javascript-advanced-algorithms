class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length <= 10) return false;
    else return true;
  }

  isEmpty() {
    // ... your code goes here
    if (!this.stackControl.length) return true;
    else return false;
  }

  push(item) {
    // ... your code goes here
    if (this.canPush() === true) {
      return this.stackControl.push(item);
    }else if (this.canPush() === false) {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty() === false) {
      return this.stackControl.pop();
    } else throw new Error('STACK_UNDERFLOW')
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
