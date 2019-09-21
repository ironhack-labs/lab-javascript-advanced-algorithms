class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    return this.stackControl.length > 0 ? false : true;
  }
  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }
  push(num) {
    if (this.canPush()) {
      this.stackControl.push(num);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
