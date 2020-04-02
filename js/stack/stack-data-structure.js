class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty()
  }

  canPush() {
    if (this.stackControl.length == this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  display() {

  }

  isEmpty() {
    if (this.stackControl.length == 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return [item]
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
