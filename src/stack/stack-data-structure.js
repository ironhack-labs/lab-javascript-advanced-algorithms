class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    return this.stackControl.length < this.MAX_SIZE
  }

  isEmpty() {
    return !this.stackControl.length
  }

  push(item) {

    if (this.canPush() === true) {
      this.stackControl.push(item)
    } else {

      throw new Error('STACK_OVERFLOW')
    }
    return this.stackControl
  }

  pop() {

    let item

    if (!this.isEmpty()) {
      item = this.stackControl.pop()
    } else {
      throw new Error('STACK_UNDERFLOW')
    }
    return item

  }

  display() {

    return this.stackControl

  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
