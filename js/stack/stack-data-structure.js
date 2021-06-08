
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
      return new Error('STACK_OVERFLOW')
    }
    // ... your code goes here
  }
  /**Stack method pop
  Add a method called pop to the Stack class.
  pop will be used to remove the last element in the stack.
  
  When pop is called,
  you should first check whether the stack holds any items.
  To do so, you can call the stack's isEmpty method.
  
  If the value returned by isEmpty is false,
  you should remove the last item of the stackControl array.
  
  If the value returned by isEmpty is true,
  we have a case of "Stack Underflow".
  Stack Underflow occurs when we try to remove an item from an empty stack.
  This operation shouldn't be allowed.
  As such, we should throw an error with the message 'STACK_UNDERFLOW'.
   */
  pop() {
    // ... your code goes here
  }
  /**
  Stack method display
  Lastly, let's add a method called display to the Stack class.
  The method should simply return the list of items stored in the stack.
     */
  display() {
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
