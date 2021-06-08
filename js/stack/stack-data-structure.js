class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
  if ((this.stackControl.length) < this.MAX_SIZE) {
      return true
    } else {
      return false
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
       
    } else {
      throw new Error('STACK_OVERFLOW');
    }
      return this.stackControl

    
  }

  pop() {
    const lastElem = this.stackControl.length - 1
    if (this.isEmpty()) {

      throw new Error('STACK_UNDERFLOW') 

    } else {

      return this.stackControl[lastElem]

    }
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
