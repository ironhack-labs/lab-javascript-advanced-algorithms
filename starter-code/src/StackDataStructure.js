class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }
  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }
  push(data) {
    if (this.stackControl.length === this.MAX_SIZE) {
      return "Stack Overflow";
    } else {
      this.stackControl.push(data);
    }
    return this.stackControl;
  }
  pop() {
    if (this.stackControl.length === 0) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
