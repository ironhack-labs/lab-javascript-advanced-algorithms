class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length === this.MAX_SIZE) {
      return false;
    }
    return true;
  }

  display() {
    // ... your code goes here
    return this.stackControl;

  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  }

  push(item) {
    // ... your code goes here

    if (this.canPush()) {
       this.stackControl.push(item);
       return this.stackControl;
    }
    
    if(this.stackControl.length === this.MAX_SIZE) {
      return 'Stack Overflow';
    }
    
  }

  pop() {
    // ... your code goes here
    if (this.stackControl.length < this.MAX_SIZE && this.stackControl.length > 0) {
      return this.stackControl.pop();
    } else {
      return "Stack Underflow";
    }
  }
}
