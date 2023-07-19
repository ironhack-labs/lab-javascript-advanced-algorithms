class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if (this.stackControl.length >= this.MAX_SIZE) {

      return false
    }
    else { return true }

  }

  isEmpty() {

    if (this.stackControl.length === 0) {

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

      ///throw new Error('STACK_OVERFLOW');

      return 'Stack Overflow'
    }
  }

  pop() {

    if (!this.isEmpty()) {

      return this.stackControl.pop()


    }
    else {
      /// throw new Error('STACK_UNDERFLOW');

      return 'Stack Underflow'
    }

  }


  display() {

    return this.stackControl
  }
}


if (typeof module !== 'undefined') module.exports = Stack;
