class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if (this.stackControl.length >= this.MAX_SIZE) {
      return false
    } else {
      return true
    }
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
    // ... your code goes here
  }

  push(item) {
    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW') 
    }
    this.stackControl.push(item)
      
      return this.stackControl

    }
    // ... your code goes here


  pop() {
    if (!!this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW')
    }

    return this.stackControl.pop()
    // ... your code goes here
  }

  display() {
    return this.stackControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
