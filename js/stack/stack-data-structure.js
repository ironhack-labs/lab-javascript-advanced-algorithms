class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  display() {

    // ... tiiiki tiki xD
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return [this.stackControl[this.stackControl.length - 1]];
    } else {
      return 'Stack Overflow';
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow';
    } else {
      const last = this.stackControl[this.stackControl.length - 1];
      this.stackControl.pop()
      return last
    }
  }
}
