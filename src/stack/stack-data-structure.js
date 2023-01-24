class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) { return true }
    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    }
  }

  isEmpty() {
    if (!this.stackControl.length) { return true }
    else {
      return false
    }
  }

  push(item) {
    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW')
    }
    else { this.stackControl.push(item) }
    return this.stackControl
  }

  pop() {
    if (this.isEmpty()) { throw new Error('STACK_UNDERFLOW') }
    else {
      let poppedItem = this.stackControl.pop()
      return poppedItem
    }
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
