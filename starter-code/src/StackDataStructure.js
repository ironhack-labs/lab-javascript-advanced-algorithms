class StackDataStructure {
  constructor() {
    this.stackControl = [],
      this.MAX_SIZE = 10
  }

  isEmpty() {
    return !this.stackControl.length
  }
  canPush() {
    return this.stackControl.length < this.MAX_SIZE

  }
  push(element) {

    if (this.canPush()) {
      this.stackControl.push(element)
      return this.stackControl
    } else return `Stack Overflow`

  }
  pop() {
    if (!this.isEmpty()) return this.stackControl[this.stackControl.length - 1]
    else return `Stack Underflow`
  }
}