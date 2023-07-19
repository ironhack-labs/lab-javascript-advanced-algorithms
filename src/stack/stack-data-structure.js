
// ---------- [INITIAL SETUP] ----------

class Stack {
  constructor() {
    this.stackControl = []; //store the items inside of stack
    this.MAX_SIZE = 10; //maximum amount of items that can be held by the stack
  }

  // ---------- [INITIAL SETUP] ----------

  // ---------- [COMPLETED] ------------

  canPush() {
    // ... your code goes here

    if (this.stackControl.length === 0) {

      return true

    }

    if (this.stackControl.length === this.MAX_SIZE) {

      return false

    }

  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  isEmpty() {
    // ... your code goes here

    if (!this.stackControl.length) {

      return true

    }

    if (this.stackControl) {

      return false

    }

  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  push(item) {
    // ... your code goes here

    if (this.stackControl.length < this.MAX_SIZE) {

      //console.log('we have space')

      this.stackControl.push(item)
      return this.stackControl

    } else {

      //throw new Error('STACK_OVERFLOW')
      return "Stack Overflow"

    }

  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  pop() {
    // ... your code goes here

    if (this.stackControl.length) {

      return this.stackControl.pop() //remove last item of array 

    } else {

      //throw new Error('STACK_UNDERFLOW')
      return "Stack Underflow"

    }
  }

  // ---------- [COMPLETED] ------------

  // ---------- [COMPLETED] ------------

  display() {
    // ... your code goes here

    return this.stackControl

  }
}

// ---------- [COMPLETED] ------------

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
