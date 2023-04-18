class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) { //why not if (this.stackControl < 0) or if (this.stackControl.length < 0)?
      return true
    } else {
      return false
    }
  }


  isEmpty() {
    if (this.stackControl.length <= 0) {
      return true
    } else {
      return false
    }

  }

  push(item) {

    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {

      throw new Error('STACK_OVERFLOW');
    }

  }

  pop() {

    if (!this.isEmpty()) {
      const removedItem = this.stackControl.pop() //why? the elememt is not the method
      return removedItem

    } else {
      throw new Error('STACK_UNDERFLOW');
    }
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
