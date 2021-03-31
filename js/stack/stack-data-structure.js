class StackDataStructure {
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

  display() {
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    }
    return false
  }

  push(item) {
    if (!this.canPush()) {
      return 'Stack Overflow'
    }
    this.stackControl.push(item)
    return this.stackControl
  }

  pop() {
    if (this.stackControl.length === 0) {
      return 'Stack Underflow'
    } 
    this.stackControl.pop()
    return this.stackControl[this.stackControl.length - 1]
  }
}
