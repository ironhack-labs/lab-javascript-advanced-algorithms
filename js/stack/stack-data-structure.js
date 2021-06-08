class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if (this.stackControl.length < this.MAX_SIZE)

      return true

    else if (this.MAX_SIZE = this.stackControl.length)

      return false
    // ... your code goes here
  }

  isEmpty() {

    if (this.stackControl.length <= 0)

      return true

    else if (this.stackControl.length > 0) {
      
    }

      return false
    // ... your code goes here
  }

  push(item) {

    let error = new Error("STACK_OVERFLOW")

    if (this.canPush() === false) {

      throw error
    }

   if (this.stackControl.push(item))

    return this.stackControl

  

    // ... your code goes here
  }

  pop() {


    let error = new Error("STACK_UNDERFLOW")

    if (this.isEmpty() === true) {
      throw error
    }

   let lastElement = this.stackControl[this.stackControl.length -1]

   if (this.stackControl.pop)

     return lastElement
   
    // ... your code goes here
  }

  display() {
    
    
    return this.stackControl// ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
