
class StackDataStructure {
  constructor(maxNum) {
    this.MAX_SIZE = Number(maxNum);
    this.stackControl = [];

  }
  isEmpty() {
    if(this.stackControl.length < 1) {
      return true
    } else {
      return false
    }
  }
  canPush() {
    if(this.stackControl.length >= this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }
  push(args) {
    if (this.canPush()) {
      this.stackControl.push(args)
      return this.stackControl;
    } else {
      return 'Stack Overflow'
    }
  }
  pop() {
    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      return 'Stack Underflow'
    }
  }
}

