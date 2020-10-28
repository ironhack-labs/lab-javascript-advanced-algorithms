class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if (this.stackControl < 10) {
      return true
    } else {
      return false
    }

    // ... your code goes here
  }

  display() {

  return this.stackControl
    // ... your code goes here
  }

  isEmpty() {

    if (this.stackControl <= 0) {
      return true
    } else {
      return false
    }

    // ... your code goes here
  }

  push(item) {
      
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return 'Stack Overflow'

    }
    // ... your code goes here
  }

  pop() {
    if (this.stackControl.length === 0) {
      return 'Stack Overflow'
    } else {
      return this.stackControl.pop()
    }
    // ... your code goes here
  }
}
