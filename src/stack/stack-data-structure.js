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
    return false

  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return true
    }
    return false
  }

  push(item) {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(item)
      return this.stackControl
    }

    throw new Error('STACK_OVERFLOW')

  }

  pop() {
    if (this.stackControl.length === 0) {
      throw new Error('STACK_UNDERFLOW');
    }
    const deletedItem = this.stackControl.pop()
    return deletedItem
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
