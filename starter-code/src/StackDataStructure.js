class StackDataStructure {
  constructor() {
    this.MAX_SIZE = 8;
    this.minSize = 0;
    this.stackControl = [];
    this.counter = 0;
  }

  isEmpty() {
    if (this.counter <= 0) {
      return true;
    } else {
      return false;
    }
  }
  canPush() {
    if (this.counter >= this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }
  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      this.counter++;
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }
  pop() {
    if (!this.isEmpty()) {
      var popped = this.stackControl.pop();
      this.counter--;
      return popped;
    }
    else {
      return 'Stack Underflow';
    }
  }

}
