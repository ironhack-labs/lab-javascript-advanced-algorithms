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
    if (this.stackControl.length >= this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }

  push(item) {
    //Adds
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      //   return false;
      return "Stack Overflow";
    }
  }

  pop(item) {
    //Removes
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      //this.stackControl.pop(item);
      return this.stackControl.pop(item);
    }
  }
}
