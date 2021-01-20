class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length >= this.MAX_SIZE) {
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
    if (this.stackControl.length <= this.MAX_SIZE) {
      this.stackControl.push(item)
      if (this.stackControl.length > this.MAX_SIZE) {
        return `Stack Overflow`
      }
      return this.stackControl      
    }
  }

  pop() {
    // ... your code goes here
    if (this.stackControl.length >= 0) {      
      if (this.stackControl.length <= 0) {
        return `Stack Underflow`
      }
      return this.stackControl.pop()
    }
  }
}
