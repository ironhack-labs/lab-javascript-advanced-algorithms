class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }

  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    if (this.stackControl.length === this.MAX_SIZE) {
      return ('Stack Overflow');
    }

    this.stackControl.push(item);
    return this.stackControl;
  }

  pop() {
    if (this.stackControl.length === 0) {
      return ('Stack Underflow');
    }
    return this.stackControl.pop();

  }

  display() {
    return (this.stackControl)
  }

}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
