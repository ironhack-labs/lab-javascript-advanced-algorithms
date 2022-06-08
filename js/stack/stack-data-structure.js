class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length == this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  isEmpty() {
    if (this.stackControl.length == 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    let empty = this.canPush()
    if (empty) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('STACK_OVERFLOW')
    }
  }

  pop() {
    let empty = this.isEmpty()
    if (empty) {
      throw new Error('STACK_UNDERFLOW')
    } else {
      let popElement = this.stackControl.pop()
      return popElement
    }
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
