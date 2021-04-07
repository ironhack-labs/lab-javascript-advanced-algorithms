class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length === this.MAX_SIZE ? false : true
  }

  display() {
    return this.stackControl
  }

  isEmpty() {
    return this.stackControl.length === 0 ? true : false
  }

  push(item) {
    if (this.stackControl.length === this.MAX_SIZE){
      return "Stack Overflow"
    }else{
      this.stackControl.push(item)
      return this.stackControl
    }
  }

  pop() {
    if (this.stackControl.length === 0){
      return "Stack Underflow"
    }else{
      return this.stackControl.pop()
    }
  }
}
