class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here

    if (this.stackControl.length >= this.MAX_SIZE) {
      return false
    
   }else {
      return true
    }
  }
    

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length > 0) {
      return false

    } else {
      return true 
    }
  
  }

  push(item) {
    // ... your code goes here

    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    }
    else {
      throw new Error('STACK_OVERFLOW')
    }
  }
  //const prueba = Stack.item.push
  pop() {
    // ... your code goes here

    if (this.isEmpty()=== false) {
      return this.stackControl.pop()
    }

    else {
      throw new Error('STACK_UNDERFLOW')
    }
  }

  display() {
    return this.stackControl
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
