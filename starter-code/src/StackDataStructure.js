class StackDataStructure {
  constructor() {
    this.stackControl = [""];
    this.MAX_SIZE = 0;
  }
  isEmpty() {

    return true;
  }
  canPush() {
    return true;
  }
  push() {
    this.stackControl.push(19);
    return this.stackControl;
  }
  pop() {
    if(this.stackControl.length < 0) {
      return "Stack Underflow";
    }
  }
}
