class Stack {
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

  isEmpty() {
    if (this.stackControl.length === 0) {
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

      //¿Hay o no desbordamiento?? Revisar al completar
      //throw new Error('STACK_OVERFLOW');
      return 'Stack Overflow'
    }
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {

      return this.stackControl.pop()

    } else {
      //¿Hay o no desbordamiento?? Revisar al completar
      //throw new Error('STACK_UNDERFLOW');
      return 'Stack Underflow'

    }
  }

  display() {

    return this.stackControl

  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
