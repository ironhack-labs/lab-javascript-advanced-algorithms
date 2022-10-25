class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.MAX_SIZE <= this.stackControl.length ? false : true
  }

  isEmpty() {
    return this.stackControl.length ? false : true
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error("STACK_OVERFLOW")
    }
  }

  pop() {
    if (this.isEmpty() === false) {
      return this.stackControl.pop()
    } else {
      throw new Error("STACK_UNDERFLOW")
    }
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
