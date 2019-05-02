class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    return this.stackControl.length === 0;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE;
  }

  push(e) {
    if (this.canPush()) {
      this.stackControl.push(e);
      return this.stackControl;
    } else {
      return `Stack Overflow`;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    let elemPopped = this.stackControl.pop();
    return elemPopped;
  }
}
