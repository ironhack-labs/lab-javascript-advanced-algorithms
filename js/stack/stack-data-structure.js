class StackDataStructure {
  constructor(size) {
    this.stackControl = [];
    this.MAX_SIZE = size;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) return false;
    return true;
  }

  display() {
    return this.stackControl;
  }

  isEmpty() {
    if (this.stackControl.length > 0) return false;
    return true;
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }

  pop() {
    if (this.stackControl.length === 0) {
      return 'Stack Underflow';
    } else {
      return this.stackControl.pop();
    }
  }
}
