class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if(this.stackControl.length < this.MAX_SIZE){
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    // ... your code goes here
    if(this.stackControl > 0) {
      return false
    } else {
      return true;
    }
    }

  push(item) {
    // ... your code goes here
    if(this.canPush() === true){
      this.stackControl.push(item);
      return this.stackControl;

    } else {
      throw new Error("STACK_OVERFLOW")
    }
  }

  pop() {
    // ... your code goes here
    if(this.isEmpty() === false ){
      this.stackControl.pop();
      return this.stackControl;
      // TO DO
    } else {
      throw new Error("STACK_UNDERFLOW")
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
