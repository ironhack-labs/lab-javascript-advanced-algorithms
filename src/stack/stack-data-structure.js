class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length < this.MAX_SIZE){
      return true
    }
    else {
      return false
    }
  }

  isEmpty() {
  if(this.stackControl.length === 0){
      return true
    }
    else {
      return false
    }
  }

  push(item) {
    if (this.canPush() === true){
      this.stackControl.push(item)
    }
    else {
    throw new Error('STACK_OVERFLOW');
    }
    return this.stackControl
  }

  pop() {
    let popped
    if(!this.isEmpty()){
      popped = this.stackControl.pop()

      this.stackControl.pop()
    }
    else {
      throw new Error('STACK_UNDERFLOW');
    }
    return popped
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
