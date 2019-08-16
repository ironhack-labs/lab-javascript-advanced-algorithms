class atack {
  constructor() {
    this.stackControl = [];
  }
  isfull() {
    //si el elmento existe, negarlo da falso
    //si no, dadas ciertas particularidades del lenguaje,
    //devuelve verdadero
    return !this.stackControl[8];
  }
  push(element) {
    this.stackControl.push(element);
  }

  pop() {
    return this.stackControl.pop();
  }
}
