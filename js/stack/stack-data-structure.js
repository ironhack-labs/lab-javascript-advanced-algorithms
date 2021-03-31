class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length >= 0 && this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl
    } else if (!this.canPush()) {
      return 'Stack Overflow'
    }
  }

  pop() {
    if (this.stackControl.length !== 0) {
      return this.stackControl.pop();
    } else if (this.stackControl.length === 0) {
      return 'Stack Underflow'
    }

  }
}
