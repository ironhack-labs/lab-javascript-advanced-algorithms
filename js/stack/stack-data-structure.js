class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
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
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    const toPush = this.canPush(item)
    if (toPush === false) {
      return 'Stack Overflow'
    } else {
      this.stackControl.push(item)
      return this.stackControl
    }
  }

  pop() {
    // ... your code goes here
    const lastItem = this.stackControl[this.stackControl.length -1]
    if (this.stackControl.length === 0) {
      return 'Stack Underflow'
    } else {
      this.stackControl.pop()
      return lastItem
    }
  }
}
