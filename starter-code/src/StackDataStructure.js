class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.size = 0;
  }

  isEmpty() {
    return (this.size === 0)
  }

  canPush() {
    return (this.size < this.MAX_SIZE);
  }

  push(item) {
    if (!this.canPush()) return 'Stack Overflow';
    this.stackControl.push(item);
    this.size += 1;
    return this.stackControl;
  }

  pop() {
    if (this.isEmpty()) return 'Stack Underflow';
    this.size -= 1;
    return this.stackControl.pop();
  }
}
