class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    return !Boolean(this.stackControl.length);
  }

  canPush() {
    return this.stackControl.length !== this.MAX_SIZE;
  }

  pop(element) {
      if (!this.isEmpty()) return this.stackControl.pop();
      else return 'Stack Underflow'
  }

  push(element) {
      if (this.canPush()) {
          this.stackControl.push(element)
          return this.stackControl
      }
      else return 'Stack Overflow'
  }
}