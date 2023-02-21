class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() { 
    if(this.stackControl.length < this.MAX_SIZE){
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
    let isFull = this.canPush();
    if(isFull === true){
      this.stackControl.push(item);
      return this.stackControl;
    }else if(isFull === false){
      throw new Error('STACK_OVERFLOW');
    }
    
  }

  pop() {
    const empty = this.isEmpty();
    if(empty === true){
      throw new Error('STACK_UNDERFLOW');
    }else{
     return this.stackControl.pop();
    }
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;