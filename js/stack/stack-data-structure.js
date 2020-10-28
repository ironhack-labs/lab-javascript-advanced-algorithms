class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    let canPush = true
    if (this.stackControl.length === this.MAX_SIZE) {
      canPush = false
    }
    return canPush
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    return (this.stackControl.length === 0)
  }

  push(item) {
    if (!this.canPush()) {
      return 'Stack Overflow'
    } else {
      this.stackControl.push(item)
      return this.stackControl
    }
  }

  pop() {
    if (this.stackControl.length === 0) {
      return 'Stack Underflow'
    } else {
      return this.stackControl.pop()
    }
  }
}
