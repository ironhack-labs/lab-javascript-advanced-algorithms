class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    
    if (this.stackControl.length == this.MAX_SIZE) {

      return false;
      
    } else {

      return true;

    }

  }

  isEmpty() {
    
    if (this.stackControl.length == 0) {

      return true;

    } else {

      return false;

    }
    
  }

  push(item) {
    
    // let canPushResult = this.canPush(item);
    
    if (this.canPush()) {

      this.stackControl.push(item);
      return this.stackControl;

    } else {

      throw new Error('STACK_OVERFLOW');

    }

  }

  pop() {
    
  if (this.isEmpty() == false) {

    return this.stackControl.pop();

  } else {

    throw new Error('STACK_UNDERFLOW');

  }
    
  }

  display() {
    
    return this.stackControl;

  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
