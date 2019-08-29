class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    return this.stackControl.length === 0 ? true : false;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  push(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    }

    return `Stack Overflow`;
  }

  pop() {
    return this.isEmpty() ? `Stack Underflow` : this.stackControl.pop();
  }
}
