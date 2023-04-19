class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else { return false }



  }

  isEmpty() {

    if (!this.stackControl.length) {
      return true
    } else if (this.stackControl.length > 0) {
      return false
    }

  }

  push(item) {


    if (this.canPush()) {
      this.stackControl.push(item)

      return this.stackControl

    } else {
      throw new Error('STACK_OVERFLOW')
    }
  }

  pop() {



    if (!this.isEmpty()) {
      const variable = this.stackControl.pop()
      return variable
    } else {

      throw new Error('STACK_UNDERFLOW')

    }

  }

  display() {
    return this.stackControl
  }
}




// This is required to enable the automated tests, please ignore it.

