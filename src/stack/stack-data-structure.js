class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    }
    return true
  }

  isEmpty() {
    if (this.stackControl.length > 0) {
      return false
    }
    return true
  }

  push(item) {

    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW')
    }
    this.stackControl.push(item)
    return this.stackControl
    
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW')
    }
    return this.stackControl.pop()
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
