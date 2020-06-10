class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    //pila.length <10
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  display() {
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    //Pila.push(element) a posicion final de la pila
    if (this.stackControl.length === this.MAX_SIZE) {
      return "Stack Overflow"
    } else {
      this.stackControl.push(item)
    }
    return this.stackControl
  }

  pop() {
    //pila.pop(elemento) borra elemento final de la pila
    if (this.isEmpty()) {
      return "Stack Underflow"
    } else {
      let popedItem = this.stackControl[this.stackControl.length - 1]
      this.stackControl.pop()
      return popedItem
    }
  }
}