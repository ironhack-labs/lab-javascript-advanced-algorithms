class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // Check the length of the stack to not do an overflow
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else if (this.stackControl.length >= this.MAX_SIZE) {
      return false
    }
   
  }

  display() {
    return this.stackControl.length
  }

  isEmpty() {
    // Check the length of the stack to not do an underflow
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    // Add a new item only when is possible
    this.stackControl.push(item)
    if (this.canPush() == false) {
      // The return is changed to compare in the DOM
      return "overflow"
    }
    return this.stackControl
  }

  pop() {
    // Remove a new item only when is possible
    if (this.isEmpty()) {
      // The return is changed to compare in the DOM
      return "underflow"
    }
    let lastElement = this.stackControl.pop()
    return lastElement
    
  }
}
