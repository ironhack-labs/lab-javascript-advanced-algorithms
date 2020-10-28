class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;

  }

  canPush() {

    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
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
    // ... your code goes here
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return ("Stack Overflow");
    }
    // ... your code goes here
  }

  pop() {
    if (this.isEmpty()) {
      return ("Stack Underflow");
    } else {
      return this.stackControl.pop()
    }
    // ... your code goes here
  }
}
