class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return (this.stackControl.length < this.MAX_SIZE)
  }
      

  isEmpty() {
    return (this.stackControl.length === 0)
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl;
    } else { return 'Stack Overflow'}

  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow';
    } else {
      const stackElim = this.stackControl[this.stackControl.length - 1]
      this.stackControl.pop()
      return stackElim;
    }
  }


  display() {
    return [...this.stackControl];
}
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
