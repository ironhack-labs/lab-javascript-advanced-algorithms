class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }
    else {
      return false
    }
  }

  display() {
  }

  isEmpty() {
    if (!this.stackControl.length) {
      return true
    }
    else {
      return false
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    }
    else {
      return 'Stack Overflow'
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow'
    }
    else {
      const lastItem = this.stackControl[this.stackControl.length-1]
      return lastItem
    }
 
  }
}
