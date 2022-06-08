class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length >= this.MAX_SIZE){
      return false
    }else{
      return true
    }
  }

  isEmpty() {
    if(this.stackControl.length === 0){
      return true
    }return false
  }

  push(item) {
    if(this.canPush() === true){
      this.stackControl.push(item)
      return this.stackControl
    } throw new Error('STACK_OVERFLOW');
  }

  pop() {
    if(this.isEmpty() === false){
      let lastElement = this.stackControl[this.stackControl.length -1]
      this.stackControl.pop()
      return lastElement 
    } throw new Error('STACK_UNDERFLOW');
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
