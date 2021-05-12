class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  display() {
    if (this.stackControl.length === 0) {
      return "Stack Underflow";
    } else if (this.stackControl.length === this.MAX_SIZE) {
      return "Stack Overflow";
    } else {
      return this.stackControl;
    }
  }

  isEmpty() {
    return this.stackControl.length <= 0 ? true : false;
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return [item];
    }
    return "Stack Overflow";
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
