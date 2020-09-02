class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  display() {
    return this.stackControl;
  }

  isEmpty() {
    return this.stackControl.length === 0 ? true : false;
  }

  push(item) {
    this.stackControl.push(item);
    return this.stackControl.length <= this.MAX_SIZE ? this.stackControl : 'Stack Overflow';
  }

  pop() {
    return this.stackControl.length ? this.stackControl.pop() : 'Stack Underflow';
  }
}
