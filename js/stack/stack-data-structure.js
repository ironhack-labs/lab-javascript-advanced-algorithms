class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    
    if (this.stackControl.length < this.MAX_SIZE){
      return true;
    } else if (this.stackControl.length === this.MAX_SIZE){
      return false;
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else if (this.stackControl.length > 0) {
      return false;
    }
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item);
      return this.stackControl;
    } else if (this.canPush() === false) {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    if (this.isEmpty() === false) {
      let popino = this.stackControl.pop();
      return popino;
    } else if (this.isEmpty() === true) {
      throw new Error('STACK_UNDERFLOW');
    }
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
