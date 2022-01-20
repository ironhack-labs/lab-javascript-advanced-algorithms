class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  
  getLength() {
    let counter = 0;
    while (this.stackControl[counter] !== undefined) {
      counter++;
    }
    return counter;
  }

  canPush() {
    let length = this.getLength();
    if (length === 0) {
      return true;
    }
    if (length >= this.MAX_SIZE) {
      return false;
    }
  }

  isEmpty() {
    let length = this.getLength();
    return length === 0;
  }

  push(item) {
    let length = this.getLength();
    if (length >= this.MAX_SIZE) {
      throw new Error("STACK_OVERFLOW");
    } else {
      this.stackControl[length] = item;
    return this.stackControl;
    }
  }

  pop() {
    let length = this.getLength();
    if (length === 0) {
      throw new Error("STACK_UNDERFLOW");
    }
    return this.stackControl[length - 1];
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

let stack = new Stack();
stack.stackControl = [1, 2, 3];
let result = stack.push("Nico");
console.log("Returned array after push: ", result);