class Stack {
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
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length < 1) {
      return true
    } else {
      return false
    }
    //else
    // ... your code goes here
  }

  push(item) {
    // ... your code goes here


    if (this.canPush() === true) {
      this.stackControl.push(item)
      return this.stackControl
      //
    } else {
      throw new Error('STACK_OVERFLOW');


    }

  }

  pop() {
    // ... your code goes here

    if (this.isEmpty() === false) {

      return this.stackControl.pop()
    } else {
      throw new Error('STACK_UNDERFLOW');

    }

  }

  display() {
    // ... your code goes here

    return this.stackControl

  }


}




// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
