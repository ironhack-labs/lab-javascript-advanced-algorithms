class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length <= 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item)
      return this.stackControl
    } else if (this.canPush() === false) {
      return 'Stack Overflow'
    }
  }

  pop() {
    if (this.stackControl.length <= 0){
      this.stackControl.pop()
      return 'Stack Underflow'
    } return this.stackControl[this.stackControl.length - 1]
  }



}
