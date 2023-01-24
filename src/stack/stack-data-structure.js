class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (!this.stackControl.length) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('Stack Underflow')
    }
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      throw new Error('Stack Overflow')
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
