class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return (this.stackControl.length < this.MAX_SIZE)
  }

  isEmpty() {
    return (this.stackControl.length === 0)
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
    } else {
      // throw new Error('STACK_OVERFLOW');  este es para el test de Jasmine
      return "Stack Overflow"
    }
    return this.stackControl
  }

  pop() {
    if (!this.isEmpty()) {
      const poppedElement = this.stackControl.pop()
      return poppedElement
    } else {
      // throw new Error('STACK_UNDERFLOW');  este es para el test de Jasmine
      return 'Stack Underflow'
    }
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
