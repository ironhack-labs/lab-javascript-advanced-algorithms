class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  // Check if we can add new elements
  canPush(elm) {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  display() {
  }

  //Check if current stack is empty
  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  // Add elements
  push(item) {
    if (!this.canPush()) {
      return "Stack Overflow" 
    } else {
      this.stackControl.push(item)
      return this.stackControl
    }
  }

  // Remove elements
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow"
    }
    return this.stackControl.pop()
  }
}
