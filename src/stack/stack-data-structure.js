class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length >= this.MAX_SIZE? false:true
  }

  isEmpty() {
    return this.stackControl.length? false : true
  }

  push(item) {
    
    if (this.canPush()){
      this.stackControl.push(item)
      return this.stackControl
    }else{
      throw Error ("STACK_OVERFLOW")
    }

    
  }

  pop() {
  if  (!this.isEmpty()) {
    return this.stackControl.pop()
  }else{
    throw Error ("STACK_UNDERFLOW")
  }
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
