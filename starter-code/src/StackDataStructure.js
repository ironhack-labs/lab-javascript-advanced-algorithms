class StackDataStructure {

  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 10
  }

  isEmpty() {
    return (this.stackControl.length === 0)
  }

  canPush() {
    return (this.stackControl.length != this.MAX_SIZE)
  }

  push(element) {
    if (this.canPush()) {
      this.stackControl.push(element)
      return this.stackControl

    } else {
      return 'Stack Overflow'
    }
  }

  pop(element) {
    if (!this.isEmpty())
      return this.stackControl.pop(element)

    else return "Stack Underflow"
  }

}

