class StackDataStructure {
  constructor () {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty () {
    return this.stackControl.length === 0 ? true : false;
  }

  canPush () {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }
  push (e) {
    if (this.canPush() === true) {
      this.stackControl.push(e);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }

  pop () {
    return this.stackControl.length === 0 ? 'Stack Underflow' : this.stackControl.pop();
  }
}