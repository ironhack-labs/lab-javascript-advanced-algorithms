class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) return true
    return false
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length <= 0) return true
    return false
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    }
    throw new Error('STACK_OVERFLOW')
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) { return this.stackControl.pop() }
    throw new Error('STACK_UNDERFLOW')
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
