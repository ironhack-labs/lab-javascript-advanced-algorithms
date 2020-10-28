class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl.length < this.MAX_SIZE;
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }

  isEmpty() {
    // ... your code goes here

    return this.stackControl.length === 0;
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {
      const lastItem = this.stackControl.pop();
      return lastItem;
    } else {
      return "Stack Underflow";
    }
  }
}
