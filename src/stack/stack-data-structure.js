class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === 0) {
      return true
    } 
    else if (this.stackControl.length === this.MAX_SIZE) {
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
    if (this.stackControl.push(item)) {
      return this.stackControl
    } 
    else if (this.stackControl.length === this.MAX_SIZE) {
      throw Error('STACK_OVERFLOW')
    }
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stackControl.pop()
    }
    else {
      throw Error('STACK_UNDERFLOW')
    }
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
