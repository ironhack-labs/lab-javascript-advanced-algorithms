class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length >= this.MAX_SIZE) {
      console.log(false);
      return false
    } else {
      console.log(true);
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

    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error('STACK_OVERFLOW');
    }

  }

  pop() {
    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      throw new Error('STACK_UNDERFLOW');
    }
  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
