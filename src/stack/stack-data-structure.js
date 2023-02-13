class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.MAX_SIZE > this.stackControl) {
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
    else {
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
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW')
    } else {
      let deleted = this.stackControl.pop()
      return deleted
    }
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
