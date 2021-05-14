class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length === this.MAX_SIZE ? false : true
  }

  display() {
    return this.stackControl;
  }

  isEmpty() {
   return this.stackControl.length > 0 ? false : true
  }

  push(item) {
    // Stack Overflow ocurre cuando intentamos agregar un elemento a una pila que ya está llena.
    if(this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl;
    }
      return 'Stack Overflow';
  }

  pop() {
    // Stack Underflow ocurre cuando intentamos obtener un elemento de una pila vacía.
    if(this.stackControl.length === 0) {
      return 'Stack Underflow';
    } else { 
      return this.stackControl.pop();
    }
  }
}
