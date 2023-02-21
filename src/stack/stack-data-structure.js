class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() { 
    if(this.stackControl.length === 0){
      return true;
    }else if(this.stackControl.length === this.MAX_SIZE){
      return false;
    }
  }

  isEmpty() {
    if(this.stackControl.length === 0){
      return true;
    }else if(this.stackControl.length >= 1 ){
      return false;
    }
  }

  push(item) {
    // ... your code goes here
  }

  pop() {
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
