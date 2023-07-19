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
  } // ... your code goes here


  push(item) {

    if (this.canPush()) {
      this.stackControl.push(item)

    } else {
      // throw new Error('STACK_OVERFLOW')
      return 'Stack Overflow'
    }
    return this.stackControl
  }




  pop() {

    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else if (this.isEmpty()) {
      // throw new Error('STACK_UNDERFLOW')
      return 'Stack Underflow'
    }
  }




  display() {
    return this.stackControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
