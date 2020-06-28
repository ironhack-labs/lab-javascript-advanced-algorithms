class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty()
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      return this.stackControl.push(item)
    } else {
      return 'Stack Overflow'
    }
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty() === true) {
      return 'Stack Underflow'
    } else {
    let last = this.stackControl[this.stackControl.length - 1];
    this.stackControl.pop()
    return last
  }
}
}
