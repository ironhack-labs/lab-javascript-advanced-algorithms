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
    }
    return false;
  }
  push(elm) {
    if (this.canPush()) {
      this.stackControl.push(elm);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }
  pop(elm) {
    if (this.stackControl.length == 0) {
      return "Stack Underflow";
    } else {
      let elm = this.stackControl[this.stackControl.length - 1];
      this.stackControl.pop(elm);
      return elm;
    }
  }
}
