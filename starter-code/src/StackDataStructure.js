class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 9;
  }

  isEmpty() {
    if (this.stackControl == "") {
      return true;
    } else {
      return false;
    }
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }

  push(newElem) {
    if (this.stackControl.length === this.MAX_SIZE) {
      return "Stack Overflow";
    }
    this.stackControl.push(newElem);

    return this.stackControl;
  }

  pop(lastElem) {
    if (this.stackControl.length === 0) {
        return "Stack Underflow";
      }

      let last = this.stackControl.pop(lastElem);
  
      return last;
  }
}

// function StackDataStructure () {

// }º
