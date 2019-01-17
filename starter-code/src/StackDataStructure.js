class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  // Check if current stack is empty
  isEmpty() {
    return this.stackControl.length === 0;
  }

  // Check if we can push elements into the stack
  canPush() {
    return this.stackControl.length !== this.MAX_SIZE;
  }

  // push element into the stack
  push(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }

  // take element from the stack
  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow';
    } else {
      return this.stackControl.pop();
    }
  }
}
