class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }
    else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl <= 0) {
      return true
    }
    else {
      return false
    }

  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('STACK_OVERFLOW')
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const emptybox = this.stackControl.pop()
      return emptybox
    } else {
      throw new Error('STACK_UNDERFLOW')
    }

  }

  display() {
    return this.stackControl

  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
