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
  }

  isEmpty() {
    // ... your code goes here
    return this.stackControl.length == 0;
  }

  // pushes item to the end of array
  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }

  // remove item from end of array
  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      return 'Stack Underflow';
    }

  }
}
