class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  }

  canPush() {
    if (this.MAX_SIZE > this.stackControl.length) {
      return true;
    } else {
      return false;
    }
  }

  push(elm) {
    if (this.canPush()) {
      this.stackControl.push(elm);
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
