class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    if (this.stackControl.length == 0) {
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

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }

  pop(item) {
    if (!this.isEmpty()) {
      return this.stackControl.pop(item);
    } else {
      return "Stack Underflow";
    }
  }
}