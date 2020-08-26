class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {               //Para checkear si podemos añadir elementos en stack para evitar buff. overflow
    if (this.stackControl.length < this.MAX_SIZE) return true
    return false
  }

  display() {
    return this.stackControl
  }

  isEmpty() {               //Para checkear si podemos obtener elementos del stack para evitar buff. underflow
    if (this.stackControl.length === 0) return true
    return false
  }

  push(item) {
    if (this.canPush()){
        this.stackControl.push(item)
        return this.stackControl
    }
    return 'Stack Overflow'
  }

  pop() {
    if (this.isEmpty()) return 'Stack Underflow'
    return this.stackControl.pop()
  }
}
