class StackDataStructure {
  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 5
  }

  //method to avoid overemptying the stack
  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }
  //method to remove elements
  pop() {
    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      return "Stack Underflow"
    }
  }
  //method to avoid overfilling the stacck
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }
  //method to add elements
  push(elm) {
    if (this.canPush()) {
      this.stackControl.push(elm)
      return this.stackControl
    } else {
      return "Stack Overflow"
    }
  }
}
