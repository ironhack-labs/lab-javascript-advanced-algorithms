function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = () => {
    return this.stackControl.length === 0;
  };
  this.canPush = () => {
    return this.stackControl.length < this.MAX_SIZE;
  };
  this.push = elem => {
    if (this.canPush()) {
      this.stackControl.push(elem);
      return this.stackControl;
    }
    return "Stack Overflow";
  };
  this.pop = () => {
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    }
    return "Stack Underflow";
  };
}
