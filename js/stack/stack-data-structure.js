class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl.length < this.MAX_SIZE ? true : false

  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    // ... your code goes here
    return !this.stackControl.length ? true : false

  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    }
    return 'Stack Overflow'
  }

  pop() {
    // ... your code goes here
    return this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop()
  }
}
