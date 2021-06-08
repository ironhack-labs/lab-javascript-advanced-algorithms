class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    // console.log(this);
    return this.stackControl < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    // ... your code goes here
    return !this.stackControl.length ? true : false;
  }

  push(item) {
    // ... your code goes here

    if (this.stackControl.length >= this.MAX_SIZE) throw 'STACK_OVERFLOW';

    this.stackControl.push(item);

    return [item];
  }

  pop() {
    // ... your code goes here

    if (!this.stackControl.length) throw 'STACK_UNDERFLOW';

    return this.stackControl.pop();
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
