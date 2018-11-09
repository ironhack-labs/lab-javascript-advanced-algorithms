class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  }
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else if ((this.stackControl.length = this.MAX_SIZE)) {
      return false;
    }
  }
  push(number) {
    if (this.canPush() == true) {
      this.stackControl.push(number);
      return this.stackControl;
    } else if (this.canPush() === false) {
      return "Stack Overflow";
    }
  }
  pop() {
    if (this.stackControl.length > 0) {
      var lastElement = this.stackControl.length - 1;
      return this.stackControl[lastElement];
    } else if (this.isEmpty() === true) {
      return "Stack Underflow";
    }
  }
}
