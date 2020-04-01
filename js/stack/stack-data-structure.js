class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE
  }

  display() {
    return this.stackControl
  }

  isEmpty() {
    return this.stackControl.length === 0
  }

  push(item) {

    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
      
    } else {
      return "Stack Overflow"
    }

  }

  pop() {
    return this.isEmpty() ? "Stack Underflow" : this.stackControl.pop()
  }
}

let prueba = new StackDataStructure()