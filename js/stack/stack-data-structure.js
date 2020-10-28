class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
      if (this.stackControl.length < this.MAX_SIZE) {
        return true 
      } else {
        return false
      }
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
  return this.stackControl.length === 0
  }

  push(item) {
    if (this.canPush() === true) {
      this.stackControl.push(item)
    } if (this.stackControl.length >= this.MAX_SIZE) {
      return "Stack Overflow" 
    }
  }

  pop() {
    if (this.stackControl.length === 0)
      return "Stack Underflow"
    return this.stackControl.pop()
  }

}
