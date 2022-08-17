class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false;
    }

  }

  isEmpty() {
    // !this.stackControl.length = this.stackControl.length === 0
    if (!this.stackControl.length) {
      return true;
    } else {
      return false;
    }
  }

  //(this.stackControl.length > this.MAX_SIZE);
  push(item) {



    if (this.canPush()) {
      this.stackControl.push(item)
    } else {
      throw new Error("STACK_OVERFLOW");
    }


    return this.stackControl;

  }

  pop() {
    if (!this.isEmpty()) {
      return this.stackControl.pop();

    } else {
      throw new Error("STACK_UNDERFLOW");
    }
  }

  display() {
    let list = this.stackControl.map(el => {
      return el;

    });
    return list;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
