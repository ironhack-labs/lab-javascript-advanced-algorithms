class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 0;
  }

  isEmpty() {
    if (this.stackControl.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  canPush() {
    if (
      this.stackControl.length < this.MAX_SIZE ||
      this.stackControl.length == 0
    ) {
      console.log("es pusheable");
      return true;
    } else {
      console.log("noes pusheable");
      return false;
    }
  }

  push(x) {
    if (this.canPush()) {
      this.stackControl.push(x);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      let lastElement = this.stackControl.pop();
      return lastElement;
    }
  }
}
