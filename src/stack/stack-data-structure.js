class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    let result;
    if (this.stackControl.length >= 0 && this.stackControl.length < 10) { 
      result = true;
    } else {result = false}
      return result
    }
    

  isEmpty() {
    // ... your code goes here
    if(this.stackControl.length){
      return false
    }
    return true
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()){
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('STACK_OVERFLOW')
    }
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty()){
      throw new Error('STACK_UNDERFLOW')
    } else {
      console.log(this.stackControl)
       return this.stackControl.pop()
    }
  }


  display() {
    // ... your code goes here
    this.stackControl.forEach((stack) => 
     stack)
  }  

}
// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
