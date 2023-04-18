class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }
    else {
      return false
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    }
    if (this.stackControl.length > 0) {
      return false
    }
  }

  push(item) {

    if (this.canPush() === true) {
      this.stackControl.push(item)
    }
    else {
      throw new Error('STACK_OVERFLOW')
    }
    return this.stackControl
  }

  pop() {
    let poppedItem
    if (!this.isEmpty()) {
      poppedItem = this.stackControl.pop()
    }
    else {
      throw new Error('STACK_UNDERFLOW')
    }
    return poppedItem
  }

  display() {
    return this.stackControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
