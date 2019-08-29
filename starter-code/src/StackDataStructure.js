class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 19;
  }

  isEmpty() {
    return (this.stackControl.length == 0) ? true : false;
  }

  canPush() {
    return (this.stackControl.length < this.MAX_SIZE) ? true : false;
  }

  push(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }

  pop() {
    if (this.isEmpty() == false) {
      return this.stackControl.pop();
    } else {
      return 'Stack Underflow';
    }
  }
}

