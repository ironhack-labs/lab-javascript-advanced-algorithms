class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.MAX_SIZE == this.stackControl.length) {
      return false
    } else {
      return true
    }
  }

  display() {

  }

  isEmpty() {
    // ... your code goes here
    if (!this.stackControl.length) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return "Stack Overflow"
    }
    // ... your code goes here
  }

  pop(item) {
    if (!this.isEmpty()) {
      return this.stackControl.pop(item)
    } else {
      return "Stack Underflow"
    }
    // ... your code goes here
  }
}