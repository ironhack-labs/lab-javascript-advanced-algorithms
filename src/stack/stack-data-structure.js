class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (!this.stackControl.length) {
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
    this.stackControl.push(item)

    if (this.stackControl.length - 1 === this.MAX_SIZE) {
      return 'Stack Overflow'

    }

    return this.stackControl

  }

  pop(item) {
    // ... your code goes here
    if (!this.stackControl.length) {
      return 'Stack Underflow'
    }

    return this.stackControl.pop(item)
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
