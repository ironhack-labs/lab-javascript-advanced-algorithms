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
    // ... your code goes here
  }

  // Returns false if is empty
  isEmpty() {

    if (this.stackControl.length === 0) {

      return true

    } else {

      return false

    }
  }

  push(item) {

    if (!this.canPush()) {

      return 'Stack Overflow'

    }

    this.stackControl.push(item)
    return this.stackControl

  }

  pop() {

    if (this.isEmpty()) {

      return 'Stack Underflow'

    }

    return this.stackControl.pop()

  }
}
