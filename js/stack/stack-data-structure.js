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

  // display() {
  //   if (this.stackControl.length === this.MAX_SIZE) {
  //     return 'Stack Overflow'
  //   }
  //   if (this.stackControl.length <= 0) {
  //     return 'Stack Underflow'
  //   }
  // }

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
