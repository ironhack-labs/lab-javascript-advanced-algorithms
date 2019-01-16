class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 7;
  }

  isEmpty() {
    return this.stackControl.length === 0 ? true : false;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  push(element) {
    if (!this.canPush()) return "Stack Overflow"
    this.stackControl.push(element);
    return this.stackControl;
  }

  pop() {
    if (this.stackControl.length === 0) return "Stack Underflow"
    return this.stackControl.pop()
  }
}
