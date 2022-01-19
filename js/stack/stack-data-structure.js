class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if (!this.stackControl.length) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
    } else {
      throw new Error('STACK_OVERFLOW')
    }
    return this.stackControl
  }

  pop() {
    let last
    if (this.isEmpty() === false) {
      last = this.stackControl.pop()
    } else {
      throw new Error('STACK_UNDERFLOW')
    }
    return last
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
