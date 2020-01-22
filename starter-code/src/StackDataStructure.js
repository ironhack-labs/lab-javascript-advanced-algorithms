class StackDataStructure {
    constructor() {
      this.stackControl = [];
      this.MAX_SIZE = 8;
    }
  
    isEmpty() {
      return !Boolean(this.stackControl.length);
    }
  
    canPush() {
      return this.stackControl.length < this.MAX_SIZE;
    }
  
    push(stackElem) {
      return this.canPush()
        ? (this.stackControl.push(stackElem), this.stackControl)
        : "Stack Overflow";
    }
  
    pop() {
      return !this.isEmpty() ? this.stackControl.pop() : "Stack Underflow";
    }
  }
  
  const stack = new StackDataStructure();
  console.log(stack)
  