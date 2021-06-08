class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }
  /* he intentado con: 
      if (this.stackControl.length <= this.MAX_SIZE) {
      return true
    } else {
      return false
    }

    en principio deberia de funcionar pero no sale. ya que siempre q no supere 10 s

  */

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length <= 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    if (this.canPush() === true) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('STACK_OVERFLOW') 
    }
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty() === false) {
      this.stackControl.pop() 
      return this.stackControl
    } else {
      throw new Error('STACK_UNDERFLOW') 
    }
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
