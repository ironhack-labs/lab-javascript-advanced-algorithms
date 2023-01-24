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
    if (this.stackControl.length <= 0) {

      return true
    } else {
      return false
    }

  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    }
    throw new Error('STACK_OVERFLOW')


  }


  pop() {
    if (this.stackControl.length === 0) {
      throw new Error('STACK_UNDERFLOW')
    }
    let elem = this.stackControl.pop()
    return elem

  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
