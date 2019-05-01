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

  push(arg) {
    if (this.canPush()) {
      this.stackControl.push(arg);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }

  pop() {
    if (!this.isEmpty()) {
      console.log(this.stackControl);
      const popped = this.stackControl.pop();
      return popped;
    } else {
      return "Stack Underflow";
    }
  }
}
