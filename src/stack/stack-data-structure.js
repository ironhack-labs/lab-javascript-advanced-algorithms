class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if(this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if(this.stackControl.length < 1) {
      return true
    } else 
      return false
    
  }

  push(item) {
    // ... your code goes here
    const newStack = JSON.parse(JSON.stringify(this.stackControl));
    
    if (this.canPush()) {
      
      newStack.push(item);
      this.stackControl = newStack;

      return this.stackControl;
    } else throw new Error ('STACK_OVERFLOW')
    
  }

  pop() {
    // ... your code goes here
    const newStack = JSON.parse(JSON.stringify(this.stackControl));

    if (this.isEmpty()) {
      throw new Error ('STACK_UNDERFLOW')
    } else {
      const element = newStack.pop();
      this.stackControl = newStack;
      return element;
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
