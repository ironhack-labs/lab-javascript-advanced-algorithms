class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    if (this.stackControl.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  canPush() {
    if (this.stackControl.length == this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }
  push(stack) {
    if (this.canPush()) {
      this.stackControl.push(stack);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }
  pop(stack) {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop(stack);
    }
  }
}
