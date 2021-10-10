class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.stackControl.length !== 0) {
      return false;
    } else {
      return true;
    }
  }

  push(item) {
    if (this.stackControl.length >= this.MAX_SIZE) {
      throw ('STACK_OVERFLOW');
    } else {
      this.stackControl.push(item);
      return this.stackControl;
    }

  }

  pop() {

    if (this.stackControl.isEmpty === false) {

      const popped = this.stackControl.pop();
      return popped;

    } else {

      throw ('STACK_UNDERFLOW');
    }

  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
