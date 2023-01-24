class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
   if(this.stackControl.length >= this.MAX_SIZE){
    return false
   } 
   return true
  }

  isEmpty() {
    if(this.stackControl.length ==0){
      return true
    } 
    return false
  }

  push(item) {
    if(this.canPush()){
      this.stackControl.push(item)
      return this.stackControl}
    
    throw new Error('STACK_OVERFLOW') 
  }

  pop() {
    if(this.stackControl.length === 0){
      throw new Error('STACK_UNDERFLOW')
    }else{
      return this.stackControl.pop()
    }
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
