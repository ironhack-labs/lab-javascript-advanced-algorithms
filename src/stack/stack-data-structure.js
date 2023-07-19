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
    if (!this.stackControl.length) {
      return true
    }
    else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    if (!this.canPush()) {
      // throw new Error('STACK_OVERFLOW')
      return 'Stack Overflow'
    }
    else {
      this.stackControl.push(item)
      return this.stackControl
    }
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty()) {
      // throw new Error('STACK_UNDERFLOW')
      return 'Stack Underflow'
    }
    else {
      return this.stackControl.pop()
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
