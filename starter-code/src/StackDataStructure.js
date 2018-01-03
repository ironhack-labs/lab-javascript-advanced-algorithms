class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  canPush() {
    return this.stackControl.length < this.MAX_SIZE;
  }
  push(item) {
    if (this.canPush()) {
      this.stackControl.push(parseInt(item));
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
