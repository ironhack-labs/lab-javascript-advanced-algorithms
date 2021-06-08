
class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) { return true }
    if (this.stackControl.length === this.MAX_SIZE) { return false }//porque no puede ser this.stackControl.length >=this.Max_size?
    // ... your code goes here
  }


  /**Stack method isEmpty
  Add a method called isEmpty to the Stack class.
  
  When called, isEmpty should return true if the stack is empty, false if it holds any item.
  throw new Error('STACK_OVERFLOW'); */
  isEmpty() {
    if (this.stackControl.length > 0) { return false }
    else { return true }
    // ... your code goes here
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw 'STACK_OVERFLOW'
    }
    // ... your code goes here
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      throw 'STACK_UNDERFLOW'
    }// ... your code goes here
  }
  /**
  Stack method display
  Lastly, let's add a method called display to the Stack class.
  The method should simply return the list of items stored in the stack.
     */
  display() {
    return this.stackControl// ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
