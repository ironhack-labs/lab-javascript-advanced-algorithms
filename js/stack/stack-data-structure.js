class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl.length < this.MAX_SIZE;
  }

  display() {
    // ... your code goes here
    // Make me think about MVC system but didn't have to use it...
    // Was it important ?
  }

  isEmpty() {
    // ... your code goes here
    return !this.stackControl.length;
  }

  push(item) {
    // ... your code goes here

    if (!this.canPush()) {
      generateWarningStack("overflow");
      return "Stack Overflow";
    }

    this.stackControl.push(item)
    return this.stackControl;
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty()) {
      generateWarningStack("underflow");
      return "Stack Underflow";
    }

    return this.stackControl.pop();
  }
}