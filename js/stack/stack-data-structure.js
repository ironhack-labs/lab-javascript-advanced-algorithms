class StackDataStructure {
  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 10
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    return this.stackControl.length <= 0 ? true : false
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow'
    } else {
      return this.stackControl.pop()
    }
  }
}
