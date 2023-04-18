class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
    // console.log(this.stackControl)
  }



  isEmpty() {

    // let emptyStack = this.MAX_SIZE - this.stackControl.length
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false
    }

    //console.log(emptyStack)
  }


  push(item) {

    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }



  pop() {

    if (this.isEmpty() === false) {
      return this.stackControl.pop();

    } else {
      throw new Error('STACK_UNDERFLOW');
    }

  }

  display() {
    return this.stackControl;
  }

}
// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
