class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 1000;
    this.OVERFLOW_MSG = 'Stack Overflow';
    this.UNDERFLOW_MSG = 'Stack Underflow';
  }

  isEmpty() {
    return this.stackControl.length === 0;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE;
  }

  canPop() {
    return this.stackControl.length > 0;
  }

  push(el) {
    if (!this.canPush()) { return this.OVERFLOW_MSG; }
    this.stackControl.push(el);
    return this.stackControl;
  }

  pop() {
    if (!this.canPop()) { return this.UNDERFLOW_MSG; }
    return this.stackControl.pop();
  }

}
