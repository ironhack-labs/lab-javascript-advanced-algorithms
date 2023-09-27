class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length === 0){
      return true;
    }
    else if(this.stackControl.length === this.MAX_SIZE){
      return false;
    }
  }

  isEmpty() {
    if(this.stackControl.length === 0){
      return true;
    }
    else if(this.stackControl.length > 0){
      return false;
    }
    
  }

  push(item) {
    if(this.stackControl.length === this.MAX_SIZE){
      throw new Error ("STACK_OVERFLOW")}

    this.stackControl.push(item);
    
    return this.stackControl
  }

  pop() {
    if(this.stackControl.length === 0){
      throw new Error ("STACK_UNDERFLOW")}

      let poppedItem = this.stackControl.pop()
    
      return poppedItem;
  }

  display() {
    return this.stackControl
   
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
