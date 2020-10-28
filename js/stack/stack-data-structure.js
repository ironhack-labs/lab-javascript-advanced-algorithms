class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }
    else{return false}
  }

  isEmpty() {
    return (this.stackControl.length == 0)
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    }
    else {
      return ("Stack Overflow")
    }
}

  canpop() {
    if (this.isEmpty()) {
     return ('Stack Underflow')
   }
    else {
    return (this.stackControl.pop())
     
    }
  }
}
