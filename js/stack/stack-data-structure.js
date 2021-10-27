class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here

      if(this.stackControl.length<this.MAX_SIZE) {return true}
      else return false;





  }

  isEmpty() {
    if(this.stackControl.length==0){return true;}
    else return false;



    // ... your code goes here
  }

  push(item) {
    // ... your code goes here
  if(this.canPush()) {this.stackControl.push(item)
  return this.stackControl}
    else {throw new RangeError("STACK_OVERFLOW")}





  }

  pop() {
    // ... your code goes here
    if(!this.isEmpty()) {
      let removedItem = 
      this.stackControl.pop();
      return removedItem;
      
    }
    else {throw new RangeError("STACK_UNDERFLOW")}







  }

  display() {

    return this.stackControl;




    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
