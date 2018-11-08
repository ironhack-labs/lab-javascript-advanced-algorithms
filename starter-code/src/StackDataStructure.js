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
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  push(el) {
    if (this.canPush()) {
      this.stackControl.push(el);
    } else {
      return "Stack Overflow";
    }
    return this.stackControl;
  }

  pop(el) {
    if (this.isEmpty() === false) {
      return this.stackControl.pop(el);
    } else {
      return "Stack Underflow";
    }
  }
}
