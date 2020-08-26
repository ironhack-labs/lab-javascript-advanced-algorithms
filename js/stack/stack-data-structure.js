class StackDataStructure {

  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length == this.MAX_SIZE - 1) {
      return false
    }
    return true
  }

  display() {
    return this.stackControl
  }

  isEmpty() {
    if (this.stackControl.length > 0) {
      return false
    }
    return true
  }

  push(item) {
    if (this.stackControl.length == this.MAX_SIZE - 1) {
      return 'Stack Overflow'
    }

    this.stackControl.push(item)
    return this.stackControl
  }

  pop() {
    if (this.stackControl.length == 0) {
      return 'Stack Underflow'
    }

    return this.stackControl[this.stackControl.length - 1]
  }
}
