class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length <= 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here

    this.stackControl.push(item)
    if (this.stackControl.length - 1 === this.MAX_SIZE) {
      return 'Stack Overflow'
    } else {
      return this.stackControl
    }

  }

  pop() {
    if (this.stackControl.length > 0) {
      return this.stackControl.pop()
    } else {
      return 'Stack Underflow'
    }

  }
}

