class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.item = [];
  }

  canPush() {
    if(this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false; 
    }
  }

  isEmpty() {
    if(this.stackControl.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    if(this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop(item) {
    const deleteItem = this.stackControl.pop(item);
    if(!this.isEmpty()) {
      return deleteItem;
    } else {
      throw new Error('STACK_UNDERFLOW')
    }
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
