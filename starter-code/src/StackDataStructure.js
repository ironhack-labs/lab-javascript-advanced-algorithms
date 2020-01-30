function StackDataStructure() {
  // This is already the constructor
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = () => {
    return this.stackControl.length === 0 ? true : false;
  };

  this.canPush = () => {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  };

  this.push = arg1 => {
    const result = this.canPush(arg1);
    return result === true
      ? (this.stackControl.push(arg1), this.stackControl)
      : "Stack Overflow";
  };

  this.pop = () => {
    return this.stackControl.length === 0
      ? "Stack Underflow"
      : this.stackControl.pop();
  };
}
