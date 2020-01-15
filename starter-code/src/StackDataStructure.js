class StackDataStructure {

  constructor(config) {
    this.stackControl = [];
    this.MAX_SIZE = config.maxsize || 1000;
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

  updateMaxSize(newSize) {
    if (this.MAX_SIZE < 0) { return }
    this.MAX_SIZE = newSize;
    this.stackControl.splice(newSize);
  }

}
