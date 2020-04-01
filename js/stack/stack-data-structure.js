class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
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
   
    if (this.stackControl.length === this.MAX_SIZE) {
      return "Stack Overflow"
    } else { 
      this.stackControl.push(item)
      return this.stackControl
    }
  }

  pop() {
   if (this.stackControl.length === 0) {
     return "Stack Underflow"
   } else {
     return this.stackControl[this.stackControl.length -1]
   }
  }
}
