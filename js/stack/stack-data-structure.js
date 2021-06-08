class Stack {
  constructor() {
    //PROPIEDADES = VALORES
    //valores dentro del constructor
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  //METODOS = FUNCTIONES
  //fuera del constructor funciones del obj
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else return false
  }

  isEmpty() {
    if (this.stackControl.length == 0) {
      return true
    } else return false
    // ... your code goes here
  }

  push(item) {
    if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(item)
      return this.stackControl
    } else { throw new Error('STACK_OVERFLOW') };


    // ... your code goes here
  }

  pop(item) {
    if (this.stackControl.length == 0) {
      throw new Error('STACK_UNDERFLOW')
    } else {
      let x = this.stackControl.pop(item)
      return x
    }

    // ... your code goes here
  }
  display() {
    return this.stackControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
