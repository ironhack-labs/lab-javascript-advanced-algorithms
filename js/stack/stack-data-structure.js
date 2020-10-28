class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  display() {
    return this.stackControl[this.stackControl.length - 1]
  }
  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }
  }

  pop() {
    if (this.isEmpty() === false) {
      return this.stackControl.pop()
    } else {
      return 'Stack Underflow'
    }
  }

}