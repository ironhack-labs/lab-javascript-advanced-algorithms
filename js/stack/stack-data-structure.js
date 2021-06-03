class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length === this.MAX_SIZE) return false
    if(this.stackControl.length<10) return true
  }

  isEmpty() {
    if(this.stackControl.length>0) return false
    if(this.stackControl.length === 0) return true
  }

  push(item) {
    if(this.canPush()){
      this.stackControl.push(item)
      return this.stackControl
    }else{
      throw new Error('STACK_OVERFLOW')
    }
  }

  pop() {
    if(this.isEmpty()){
      throw new Error('STACK_UNDERFLOW')
    } else{
      return this.stackControl.pop()
    }
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
