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
    else (this.stackControl.length > this.MAX_SIZE)
    return false

  }

  isEmpty() {
    // ... your code goes here

    if (this.stackControl.length === 0) {
      return true
    }

    else (this.stackControl.length > 0)
    { return false }

  }

  push(item) {
    // ... your code goes here

    if (this.canPush()) {
      this.stackControl.push(item)
    }
    else {
      throw new Error('STACK_OVERFLOW')
    }

    return this.stackControl
  }

  pop() {
    if (!this.isEmpty()) {
      const elementRemoved = this.stackControl.pop()
      return elementRemoved
    }
    else {
      throw new Error('STACK_UNDERFLOW')
    }

  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
