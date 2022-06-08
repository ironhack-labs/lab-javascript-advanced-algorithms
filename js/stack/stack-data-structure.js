class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } return false
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length > 0) {
      return false
    } return true
    // ... your code goes here
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('STACK_OVERFLOW')
    }
    // ... your code goes here
  }

  pop() {
    if (this.isEmpty() === false) {
      return this.stackControl.pop()

    } else {
      throw new Error('STACK_UNDERFLOW')
    }
    // ... your code goes here
  }

  display() {
    return this.stackControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
