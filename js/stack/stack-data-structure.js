class Stack {
  constructor() {
    this.stackControl = []; //para almacenar los elementos dentro de la pila
    this.MAX_SIZE = 10; //determina la cantidad máxima de elementos de la pila
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else if (this.stackControl.length >= 1) {
      return false
    }
  }

  push(item) {
    //let pushError = throw new Error('STACK_OVERFLOW');

    // if (this.canPush()) {
    //   return this.stackControl.push(item)
    // } else {
    //   throw new Error('STACK_OVERFLOW')
    // }
    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW')
    } else {
      this.stackControl.push(item)
      return this.stackControl

    }

    // ... your code goes here
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW')

    } else {
      return this.stackControl.pop()
    }
  }

  display() {
    return this.stackControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
