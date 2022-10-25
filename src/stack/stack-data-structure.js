class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }


  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item)

      return this.stackControl
    }

  }


  pop() {
    if (!this.isEmpty()) {
      this.isEmpty()
      return this.stackControl.pop
    }
  }

  display() {
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
