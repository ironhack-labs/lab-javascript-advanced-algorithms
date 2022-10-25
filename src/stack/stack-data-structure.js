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
    if (!this.canPush(item)) {
      throw new Error("STACK_OVERFLOW")
    } else {
      this.stackControl.push(item)
    }
    return this.stackControl
  }

  pop() {

    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      throw new Error("STACK_UNDERFLOW")
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
