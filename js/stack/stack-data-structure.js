// LIFO (Last-In-First-Out) structure
//Stack Overflow occurs when we try to add an element into a stack that is already full.
//Stack Underflow occurs when we try to get an element from an empty stack.
class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  //to check if we can add new elements to the stack (to avoid the stack overflow)
  canPush() {

    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    }
    return true
  }

  display() {

  }

  //to check if we can take an element from the stack (to prevent the stack underflow)
  isEmpty() {

    if (this.stackControl.length !== 0) {
      return false
    } else {
      return true
    }

  }

  //add elements to the stack
  push(item) {

    if (this.stackControl.length === this.MAX_SIZE) {
      return 'Stack Overflow'
    }

    this.stackControl.push(item)

    if (this.stackControl.length !== 0) {
      return this.stackControl
    }

  }

  //remove elements to the stack
  pop() {

    if (this.stackControl.length === 0) {
      return 'Stack Underflow'
    }
    // return last element of the stack
    return this.stackControl.pop()

  }
}
