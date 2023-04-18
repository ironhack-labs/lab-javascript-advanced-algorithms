class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl >= this.MAX_SIZE) {
      return false
    }
    else if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    }
    else if (this.stackControl.length < this.MAX_SIZE) {
      return false
    }
  }

  push(item) {
    if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(item);
      return this.stackControl
    }

    if (this.stackControl >= this.MAX_SIZE) {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    if (this.stackControl.length > 0) {
      return this.stackControl.pop();
    }

    else if (this.stackControl.length === 0) {
      throw new Error('STACK_UNDERFLOW');
    }
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
